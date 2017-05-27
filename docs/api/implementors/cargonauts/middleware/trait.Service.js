(function() {var implementors = {};
implementors["cargonauts"] = ["impl&lt;C, B&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for <a class=\"struct\" href=\"https://hyperium.github.io/hyper/hyper/client/struct.Client.html\" title=\"struct hyper::client::Client\">Client</a>&lt;C, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"cargonauts/middleware/http/enum.Error.html\" title=\"enum cargonauts::middleware::http::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://hyperium.github.io/hyper/hyper/client/connect/trait.Connect.html\" title=\"trait hyper::client::connect::Connect\">Connect</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&gt;::<a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for <a class=\"struct\" href=\"https://hyperium.github.io/hyper/hyper/client/connect/struct.HttpConnector.html\" title=\"struct hyper::client::connect::HttpConnector\">HttpConnector</a>","impl&lt;C&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for <a class=\"struct\" href=\"cargonauts/clients/struct.Conn.html\" title=\"struct cargonauts::clients::Conn\">Conn</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: 'static + <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for Client","impl&lt;R, S, E&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-proto/0.1/tokio_proto/util/client_proxy/struct.ClientProxy.html\" title=\"struct tokio_proto::util::client_proxy::ClientProxy\">ClientProxy</a>&lt;R, S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>","impl&lt;I, O, T, F, M, R&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for EndpointService&lt;I, O, T, F, M, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"cargonauts/formats/def/trait.Format.html\" title=\"trait cargonauts::formats::def::Format\">Format</a>&lt;T, R, M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"cargonauts/methods/def/trait.Method.html\" title=\"trait cargonauts::methods::def::Method\">Method</a>&lt;T&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Endpoint&lt;F, M, R, I, O&gt; + ResourceEndpoint,&nbsp;</span>","impl&lt;C&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for <a class=\"struct\" href=\"cargonauts/clients/mock/struct.MockConnection.html\" title=\"struct cargonauts::clients::mock::MockConnection\">MockConnection</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>&gt;::<a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">Request</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>&gt;::<a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">Request</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>&gt;::<a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">Request</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>&gt;::<a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">NewService</a>&gt;::<a class=\"trait\" href=\"cargonauts/server/trait.NewService.html\" title=\"trait cargonauts::server::NewService\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for RoutingTable","impl&lt;F&gt; <a class=\"trait\" href=\"cargonauts/middleware/trait.Service.html\" title=\"trait cargonauts::middleware::Service\">Service</a> for AssetHandler&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Fn.html\" title=\"trait core::ops::Fn\">Fn</a>(&amp;'static <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'static [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>, <a class=\"struct\" href=\"cargonauts/middleware/struct.Request.html\" title=\"struct cargonauts::middleware::Request\">Request</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"enum\" href=\"cargonauts/middleware/http/enum.Error.html\" title=\"enum cargonauts::middleware::http::Error\">Error</a>, Item = <a class=\"struct\" href=\"cargonauts/middleware/http/struct.Response.html\" title=\"struct cargonauts::middleware::http::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://hyperium.github.io/hyper/hyper/http/body/struct.Body.html\" title=\"struct hyper::http::body::Body\">Body</a>&gt;&gt; + 'static&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()