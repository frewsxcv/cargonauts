use Resource;
use environment::Environment;
use request::Request;
use routes::Route;

pub trait Method<T: Resource> {
    const ROUTE: Route<'static>;

    type Request: Request<T>;
    type Response: Resource;
    type Outcome: 'static;

    fn call(req: Self::Request, env: Environment) -> Self::Outcome;
}
