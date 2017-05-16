mod present;
mod receive;

mod fieldset;

use std::io;
use std::rc::Rc;

use futures::{Future, future};

use rigging::Error;
use rigging::resource::ResourceEndpoint;
use rigging::environment::Environment;
use rigging::format::*;
use rigging::http;
use rigging::method::Method;

pub use self::fieldset::Fields;
pub use self::present::ApiSerialize;
pub use self::receive::{ApiDeserialize, ClientIdPolicy};

use self::present::*;
use self::receive::*;

pub struct JsonApi {
    _private: ()
}

const MIME: &'static str = "application/vnd.api+json";

impl<T, R, M, P> Format<T, R, M> for JsonApi
where
    T: ResourceEndpoint,
    M: ?Sized + Method<T, Request = P>,
    M::Response: JsonApiResponse,
    P: JsonApiBody<T>,
{
    type ReqFuture = P::Future;

    fn receive_request(_: &Rc<Self>, req: http::Request, env: &mut Environment) -> Self::ReqFuture {
        if let Some(fields) = Fields::new::<T>(&req) {
            env.store(fields);
        }
        P::parse(req.body())
    }

    fn present_unit(_: &Rc<Self>, future: M::Future, _: &'static str, _: &mut Environment) -> http::BoxFuture
        where M: Method<T, Response = ()>
    {
        Box::new(future.then(move |result| match result {
            Ok(())  => future::ok(http::Response::new().with_status(http::StatusCode::NoContent)),
            Err(e)  => future::ok(error_response(e)),
        }))
    }

    fn present_resource(_: &Rc<Self>, future: M::Future, _: &'static str, env: &mut Environment) -> http::BoxFuture
        where M: Method<T, Response = R>, R: ResourceEndpoint
    {
        let fields = env.take::<Fields>();
        Box::new(future.then(move |result| match result {
            Ok(r)   => future::ok(respond_with(r.write(fields.as_ref()), http::StatusCode::Ok)),
            Err(e)  => future::ok(error_response(e)),
        }))
    }

    fn present_collection(_: &Rc<Self>, future: M::Future, _: &'static str, env: &mut Environment) -> http::BoxFuture
        where M: Method<T, Response = Vec<R>>, R: ResourceEndpoint
    {
        let fields = env.take::<Fields>();
        Box::new(future.then(move |result| match result {
            Ok(r)   => future::ok(respond_with(r.write(fields.as_ref()), http::StatusCode::Ok)),
            Err(e)  => future::ok(error_response(e)),
        }))
    }

    fn present_error(_: &Rc<Self>, error: Error, _: &mut Environment) -> http::BoxFuture {
        Box::new(future::ok(error_response(error)))
    }
}

impl BuildFormat for JsonApi {
    fn build(_: &[Template]) -> Result<Self, io::Error> {
        Ok(Self { _private: () })
    }
}

fn error_response(error: Error) -> http::Response {
    respond_with(error.write(None), http::StatusCode::InternalServerError)
}

fn respond_with(data: Vec<u8>, status: http::StatusCode) -> http::Response {
    http::Response::new().with_status(status)
                   .with_header(http::headers::ContentLength(data.len() as u64))
                   .with_header(http::headers::ContentType(MIME.parse().unwrap()))
                   .with_body(data)
}
