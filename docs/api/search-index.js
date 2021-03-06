var searchIndex = {};
searchIndex["cargonauts"] = {"doc":"","items":[[3,"Error","cargonauts","The Error type for your application.",null,null],[3,"Environment","","The Environment in which an API endpoint runs.",null,null],[8,"Resource","","The trait implemented by all resources.",null,null],[16,"Identifier","","Some methods take an identifier argument. The routes which correspond to these methods all have an identifier in the URL path. For example, the `Get` method corresponds to: `GET /$resource-type/$identifier`. The identifier will be parsed from the path before passing to your code.",0,null],[8,"Relationship","","A relationship to another resource.",null,null],[16,"Related","","",1,null],[5,"serve","","",null,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[0,"config","","Configuration of cargonauts.",null,null],[3,"CargonautsConfig","cargonauts::config","",null,null],[0,"methods","cargonauts","For implementing methods on resources and defining new ones.",null,null],[8,"Delete","cargonauts::methods","Delete an instance of this resource.",null,null],[10,"delete","","",2,null],[8,"Get","","Get a single instance of this resource.",null,null],[10,"get","","",3,null],[8,"Index","","Get the index of this resource. This will return multiple resources.",null,null],[10,"index","","",4,{"inputs":[{"name":"environment"}],"output":{"name":"box"}}],[8,"Patch","","Update an instance of this resource.",null,null],[16,"Patch","","The representation of this resource received with the Patch request.",5,null],[10,"patch","","",5,null],[8,"Post","","Post a new instance of a resource.",null,null],[16,"Post","","The representation of this resouce that will be received by the POST request.",6,null],[10,"post","","",6,null],[8,"DeleteRelated","","",null,null],[10,"delete_related","","",7,null],[8,"GetOne","","",null,null],[10,"get_one","","",8,null],[8,"GetMany","","",null,null],[10,"get_many","","",9,null],[8,"PostRelated","","",null,null],[16,"Post","","",10,null],[10,"post_related","","",10,null],[8,"UpdateRelated","","",null,null],[16,"Update","","",11,null],[10,"update_related","","",11,null],[0,"def","","",null,null],[8,"Method","cargonauts::methods::def","",null,null],[18,"ROUTE","","",12,null],[16,"Request","","",12,null],[16,"Response","","",12,null],[16,"Future","","",12,null],[8,"ResourceMethod","","",null,null],[10,"call","","",13,null],[8,"CollectionMethod","","",null,null],[10,"call","","",14,null],[3,"Route","","",null,null],[12,"method","","",15,null],[12,"kind","","",15,null],[4,"Kind","","",null,null],[13,"Resource","","",16,null],[13,"Collection","","",16,null],[13,"Relationship","","",16,null],[4,"HttpMethod","","The Request Method (VERB)",null,null],[13,"Options","","OPTIONS",17,null],[13,"Get","","GET",17,null],[13,"Post","","POST",17,null],[13,"Put","","PUT",17,null],[13,"Delete","","DELETE",17,null],[13,"Head","","HEAD",17,null],[13,"Trace","","TRACE",17,null],[13,"Connect","","CONNECT",17,null],[13,"Patch","","PATCH",17,null],[13,"Extension","","Method extensions. An example would be `let m = Extension(\"FOO\".to_string())`.",17,null],[0,"formats","cargonauts","For providing formats for methods and defining new ones.",null,null],[3,"Debug","cargonauts::formats","Debug print your resource into the HTTP response.",null,null],[3,"JsonApi","","Generate a JSON response conforming to the JSON API spec.",null,null],[3,"Handlebars","","Render your response using a handlebars template.",null,null],[0,"jsonapi","","",null,null],[8,"ApiSerialize","cargonauts::formats::jsonapi","",null,null],[10,"identifier","","",18,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[10,"serialize","","",18,{"inputs":[{"name":"self"},{"name":"option"},{"name":"s"}],"output":{"name":"result"}}],[8,"ApiDeserialize","","",null,null],[18,"CLIENT_ID_POLICY","","",19,null],[16,"Identifier","","",19,null],[16,"Attributes","","",19,null],[10,"from_parts","","",19,null],[10,"deserialize","","",19,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[3,"Fields","","",null,null],[4,"ClientIdPolicy","","",null,null],[13,"Accepted","","",20,null],[13,"Required","","",20,null],[13,"NotAccepted","","",20,null],[13,"Ignored","","",20,null],[0,"def","cargonauts::formats","",null,null],[8,"Format","cargonauts::formats::def","",null,null],[16,"ReqFuture","","",21,null],[10,"receive_request","","",21,null],[10,"present_unit","","",21,null],[10,"present_resource","","",21,null],[10,"present_collection","","",21,null],[10,"present_error","","",21,{"inputs":[{"name":"rc"},{"name":"error"},{"name":"environment"}],"output":{"name":"box"}}],[8,"BuildFormat","","",null,null],[10,"build","","",22,null],[3,"Template","","",null,null],[12,"key","","",23,null],[12,"template","","",23,null],[3,"TemplateKey","","",null,null],[0,"server","cargonauts","Raw HTTP types.",null,null],[3,"Request","cargonauts::server","A request bundles several parts of an incoming `NetworkStream`, given to a `Handler`.",null,null],[3,"Response","","The Response sent to a client after receiving a Request in a Service.",null,null],[4,"Error","","A set of errors that can occur parsing HTTP streams.",null,null],[13,"Method","","An invalid `Method`, such as `GE,T`.",24,null],[13,"Uri","","An invalid `Uri`, such as `exam ple.domain`.",24,null],[13,"Version","","An invalid `HttpVersion`, such as `HTP/1.1`",24,null],[13,"Header","","An invalid `Header`.",24,null],[13,"TooLarge","","A message head is too large to be reasonable.",24,null],[13,"Incomplete","","A message reached EOF, but is not complete.",24,null],[13,"Status","","An invalid `Status`, such as `1337 ELITE`.",24,null],[13,"Timeout","","A timeout occurred waiting for an IO event.",24,null],[13,"Io","","An `io::Error` that occurred while trying to read or write to a network stream.",24,null],[13,"Utf8","","Parsing a field as string failed",24,null],[8,"Service","","An asynchronous function from `Request` to a `Response`.",null,null],[16,"Request","","Requests handled by the service.",25,null],[16,"Response","","Responses given by the service.",25,null],[16,"Error","","Errors produced by the service.",25,null],[16,"Future","","The future response value.",25,null],[10,"call","","Process the request and return the response asynchronously.",25,null],[8,"NewService","","Creates new `Service` values.",null,null],[16,"Request","","Requests handled by the service",26,null],[16,"Response","","Responses given by the service",26,null],[16,"Error","","Errors produced by the service",26,null],[16,"Instance","","The `Service` value created by this factory",26,null],[16,"Future","","The `Future` which evaluates to the instance of this factory.",26,null],[10,"new_service","","Create and return a new service value.",26,null],[5,"serve","","",null,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[3,"Handle","","A non-sendable handle to an event loop, useful for manufacturing instances of `LoopData`.",null,null],[4,"Method","","The Request Method (VERB)",null,null],[13,"Options","","OPTIONS",17,null],[13,"Get","","GET",17,null],[13,"Post","","POST",17,null],[13,"Put","","PUT",17,null],[13,"Delete","","DELETE",17,null],[13,"Head","","HEAD",17,null],[13,"Trace","","TRACE",17,null],[13,"Connect","","CONNECT",17,null],[13,"Patch","","PATCH",17,null],[13,"Extension","","Method extensions. An example would be `let m = Extension(\"FOO\".to_string())`.",17,null],[4,"StatusCode","","An HTTP status code (`status-code` in RFC 7230 et al.).",null,null],[13,"Continue","","100 Continue [RFC7231, Section 6.2.1]",27,null],[13,"SwitchingProtocols","","101 Switching Protocols [RFC7231, Section 6.2.2]",27,null],[13,"Processing","","102 Processing [RFC2518]",27,null],[13,"Ok","","200 OK [RFC7231, Section 6.3.1]",27,null],[13,"Created","","201 Created [RFC7231, Section 6.3.2]",27,null],[13,"Accepted","","202 Accepted [RFC7231, Section 6.3.3]",27,null],[13,"NonAuthoritativeInformation","","203 Non-Authoritative Information [RFC7231, Section 6.3.4]",27,null],[13,"NoContent","","204 No Content [RFC7231, Section 6.3.5]",27,null],[13,"ResetContent","","205 Reset Content [RFC7231, Section 6.3.6]",27,null],[13,"PartialContent","","206 Partial Content [RFC7233, Section 4.1]",27,null],[13,"MultiStatus","","207 Multi-Status [RFC4918]",27,null],[13,"AlreadyReported","","208 Already Reported [RFC5842]",27,null],[13,"ImUsed","","226 IM Used [RFC3229]",27,null],[13,"MultipleChoices","","300 Multiple Choices [RFC7231, Section 6.4.1]",27,null],[13,"MovedPermanently","","301 Moved Permanently [RFC7231, Section 6.4.2]",27,null],[13,"Found","","302 Found [RFC7231, Section 6.4.3]",27,null],[13,"SeeOther","","303 See Other [RFC7231, Section 6.4.4]",27,null],[13,"NotModified","","304 Not Modified [RFC7232, Section 4.1]",27,null],[13,"UseProxy","","305 Use Proxy [RFC7231, Section 6.4.5]",27,null],[13,"TemporaryRedirect","","307 Temporary Redirect [RFC7231, Section 6.4.7]",27,null],[13,"PermanentRedirect","","308 Permanent Redirect [RFC7238]",27,null],[13,"BadRequest","","400 Bad Request [RFC7231, Section 6.5.1]",27,null],[13,"Unauthorized","","401 Unauthorized [RFC7235, Section 3.1]",27,null],[13,"PaymentRequired","","402 Payment Required [RFC7231, Section 6.5.2]",27,null],[13,"Forbidden","","403 Forbidden [RFC7231, Section 6.5.3]",27,null],[13,"NotFound","","404 Not Found [RFC7231, Section 6.5.4]",27,null],[13,"MethodNotAllowed","","405 Method Not Allowed [RFC7231, Section 6.5.5]",27,null],[13,"NotAcceptable","","406 Not Acceptable [RFC7231, Section 6.5.6]",27,null],[13,"ProxyAuthenticationRequired","","407 Proxy Authentication Required [RFC7235, Section 3.2]",27,null],[13,"RequestTimeout","","408 Request Timeout [RFC7231, Section 6.5.7]",27,null],[13,"Conflict","","409 Conflict [RFC7231, Section 6.5.8]",27,null],[13,"Gone","","410 Gone [RFC7231, Section 6.5.9]",27,null],[13,"LengthRequired","","411 Length Required [RFC7231, Section 6.5.10]",27,null],[13,"PreconditionFailed","","412 Precondition Failed [RFC7232, Section 4.2]",27,null],[13,"PayloadTooLarge","","413 Payload Too Large [RFC7231, Section 6.5.11]",27,null],[13,"UriTooLong","","414 URI Too Long [RFC7231, Section 6.5.12]",27,null],[13,"UnsupportedMediaType","","415 Unsupported Media Type [RFC7231, Section 6.5.13]",27,null],[13,"RangeNotSatisfiable","","416 Range Not Satisfiable [RFC7233, Section 4.4]",27,null],[13,"ExpectationFailed","","417 Expectation Failed [RFC7231, Section 6.5.14]",27,null],[13,"ImATeapot","","418 I'm a teapot [curiously, not registered by IANA, but RFC2324]",27,null],[13,"MisdirectedRequest","","421 Misdirected Request RFC7540, Section 9.1.2",27,null],[13,"UnprocessableEntity","","422 Unprocessable Entity [RFC4918]",27,null],[13,"Locked","","423 Locked [RFC4918]",27,null],[13,"FailedDependency","","424 Failed Dependency [RFC4918]",27,null],[13,"UpgradeRequired","","426 Upgrade Required [RFC7231, Section 6.5.15]",27,null],[13,"PreconditionRequired","","428 Precondition Required [RFC6585]",27,null],[13,"TooManyRequests","","429 Too Many Requests [RFC6585]",27,null],[13,"RequestHeaderFieldsTooLarge","","431 Request Header Fields Too Large [RFC6585]",27,null],[13,"UnavailableForLegalReasons","","451 Unavailable For Legal Reasons [RFC7725]",27,null],[13,"InternalServerError","","500 Internal Server Error [RFC7231, Section 6.6.1]",27,null],[13,"NotImplemented","","501 Not Implemented [RFC7231, Section 6.6.2]",27,null],[13,"BadGateway","","502 Bad Gateway [RFC7231, Section 6.6.3]",27,null],[13,"ServiceUnavailable","","503 Service Unavailable [RFC7231, Section 6.6.4]",27,null],[13,"GatewayTimeout","","504 Gateway Timeout [RFC7231, Section 6.6.5]",27,null],[13,"HttpVersionNotSupported","","505 HTTP Version Not Supported [RFC7231, Section 6.6.6]",27,null],[13,"VariantAlsoNegotiates","","506 Variant Also Negotiates [RFC2295]",27,null],[13,"InsufficientStorage","","507 Insufficient Storage [RFC4918]",27,null],[13,"LoopDetected","","508 Loop Detected [RFC5842]",27,null],[13,"NotExtended","","510 Not Extended [RFC2774]",27,null],[13,"NetworkAuthenticationRequired","","511 Network Authentication Required [RFC6585]",27,null],[13,"Unregistered","","A status code not in the IANA HTTP status code registry or very well known",27,null],[0,"pool","","",null,null],[8,"Configure","cargonauts::server::pool","",null,null],[16,"Config","","",28,null],[10,"config","","",28,null],[3,"Pool","","An asynchronous, single-threaded connection pool.",null,null],[3,"Config","","The configuration for a connection pool.",null,null],[12,"min_connections","","The minimum number of connections this pool should maintain.",29,null],[12,"max_connections","","The maximum number of connections this pool should maintain.",29,null],[12,"min_idle_connections","","The minimum number of idle connections this pool should maintain.",29,null],[12,"max_idle_connections","","The maximum number of idle connections this pool should maintain.",29,null],[12,"connect_timeout","","How long to wait before timing out when trying to lease a new connection.",29,null],[12,"max_live_time","","Maximum time to keep a connection alive.",29,null],[12,"max_idle_time","","Maximum time to keep a connection idle.",29,null],[12,"reap_frequency","","How frequently to run the reap job, which kills connections that have been alive or idle for too long, and then re-establishes the minimum number of connections.",29,null],[0,"clients","cargonauts","For defining high level clients to other services.",null,null],[8,"Client","cargonauts::clients","",null,null],[18,"CONNECTION_NAME","","",30,null],[16,"Connection","","",30,null],[8,"ConnectClient","","",null,null],[10,"connect","","",31,{"inputs":[{"name":"conn"}],"output":{"name":"self"}}],[8,"Configure","","",null,null],[16,"Config","","",28,null],[10,"config","","",28,null],[8,"NewServiceLike","","",null,null],[3,"PoolConfig","","The configuration for a connection pool.",null,null],[12,"min_connections","","The minimum number of connections this pool should maintain.",29,null],[12,"max_connections","","The maximum number of connections this pool should maintain.",29,null],[12,"min_idle_connections","","The minimum number of idle connections this pool should maintain.",29,null],[12,"max_idle_connections","","The maximum number of idle connections this pool should maintain.",29,null],[12,"connect_timeout","","How long to wait before timing out when trying to lease a new connection.",29,null],[12,"max_live_time","","Maximum time to keep a connection alive.",29,null],[12,"max_idle_time","","Maximum time to keep a connection idle.",29,null],[12,"reap_frequency","","How frequently to run the reap job, which kills connections that have been alive or idle for too long, and then re-establishes the minimum number of connections.",29,null],[3,"Conn","","A smart wrapper around a connection which stores it back in the pool when it is dropped.",null,null],[0,"mock","","",null,null],[3,"MockConnection","cargonauts::clients::mock","",null,null],[0,"middleware","cargonauts","For wrapping your endpoints in middleware.",null,null],[3,"Request","cargonauts::middleware","",null,null],[12,"req","","",32,null],[12,"env","","",32,null],[8,"Service","","An asynchronous function from `Request` to a `Response`.",null,null],[16,"Request","","Requests handled by the service.",25,null],[16,"Response","","Responses given by the service.",25,null],[16,"Error","","Errors produced by the service.",25,null],[16,"Future","","The future response value.",25,null],[10,"call","","Process the request and return the response asynchronously.",25,null],[0,"http","","",null,null],[3,"Request","cargonauts::middleware::http","A request bundles several parts of an incoming `NetworkStream`, given to a `Handler`.",null,null],[3,"Response","","The Response sent to a client after receiving a Request in a Service.",null,null],[4,"Error","","A set of errors that can occur parsing HTTP streams.",null,null],[13,"Method","","An invalid `Method`, such as `GE,T`.",24,null],[13,"Uri","","An invalid `Uri`, such as `exam ple.domain`.",24,null],[13,"Version","","An invalid `HttpVersion`, such as `HTP/1.1`",24,null],[13,"Header","","An invalid `Header`.",24,null],[13,"TooLarge","","A message head is too large to be reasonable.",24,null],[13,"Incomplete","","A message reached EOF, but is not complete.",24,null],[13,"Status","","An invalid `Status`, such as `1337 ELITE`.",24,null],[13,"Timeout","","A timeout occurred waiting for an IO event.",24,null],[13,"Io","","An `io::Error` that occurred while trying to read or write to a network stream.",24,null],[13,"Utf8","","Parsing a field as string failed",24,null],[6,"BoxFuture","","",null,null],[8,"Middleware","cargonauts::middleware","",null,null],[16,"WrappedService","","",33,null],[10,"wrap","","",33,null],[14,"routes","cargonauts","The routes DSL",null,null],[14,"relation","","This macro constructs a new relationship alias. The syntax is `relation!(NewRelation => ResourceType);`, which creates a new type called `NewRelation` that implements Relationship to `ResourceType`.",null,null],[11,"new","","Construct a new error with an HTTP status code.",34,{"inputs":[{"name":"statuscode"}],"output":{"name":"error"}}],[11,"with_msg","","Construct a new error with a message to provide more context.",34,{"inputs":[{"name":"statuscode"},{"name":"s"}],"output":{"name":"error"}}],[11,"from_err","","Construct a new error from another error type.",34,{"inputs":[{"name":"e"},{"name":"statuscode"}],"output":{"name":"error"}}],[11,"with_backtrace","","Construct a new error from another error type, with a backtrace provided by you (probably generated closer to the source of the error).",34,{"inputs":[{"name":"e"},{"name":"statuscode"},{"name":"backtrace"}],"output":{"name":"error"}}],[11,"timeout","","An error that was cause by a timeout.",34,{"inputs":[{"name":"duration"}],"output":{"name":"error"}}],[11,"status_code","","The HTTP status code of this error.",34,{"inputs":[{"name":"self"}],"output":{"name":"statuscode"}}],[11,"backtrace","","The backtrace in this error.",34,{"inputs":[{"name":"self"}],"output":{"name":"backtrace"}}],[11,"cause","","The error which underlies this one, if this error was caused by an error of another type (that is, constructed by one of the constructors that take an error value).",34,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","cargonauts::middleware::http","",24,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",35,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","cargonauts::server","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","cargonauts::middleware::http","",36,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","cargonauts::server","",27,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"safe","","Whether a method is considered \"safe\", meaning the request is essentially read-only.",17,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"idempotent","","Whether a method is considered \"idempotent\", meaning the request has the same result if executed multiple times.",17,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","",17,{"inputs":[{"name":"self"},{"name":"method"}],"output":{"name":"bool"}}],[11,"ne","","",17,{"inputs":[{"name":"self"},{"name":"method"}],"output":{"name":"bool"}}],[11,"eq","","",27,{"inputs":[{"name":"self"},{"name":"statuscode"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",27,{"inputs":[{"name":"self"},{"name":"statuscode"}],"output":{"name":"option"}}],[11,"into","cargonauts::middleware::http","",36,{"inputs":[{"name":"self"}],"output":{"name":"message"}}],[11,"from","","",24,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",24,{"inputs":[{"name":"urierror"}],"output":{"name":"error"}}],[11,"from","","",24,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",24,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"error"}}],[11,"from","","",35,{"inputs":[{"name":"message"}],"output":{"name":"request"}}],[11,"from","","",24,{"inputs":[{"name":"utf8error"}],"output":{"name":"error"}}],[11,"default","cargonauts::server","",27,{"inputs":[],"output":{"name":"statuscode"}}],[11,"default","","",17,{"inputs":[],"output":{"name":"method"}}],[11,"default","cargonauts::middleware::http","",36,{"inputs":[],"output":{"name":"response"}}],[11,"as_ref","cargonauts::server","",17,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"hash","","",27,null],[11,"hash","","",17,null],[11,"cmp","","",27,{"inputs":[{"name":"self"},{"name":"statuscode"}],"output":{"name":"ordering"}}],[11,"description","cargonauts::middleware::http","",24,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",24,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","cargonauts::server","",27,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","cargonauts::middleware::http","",24,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","cargonauts::server","",17,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"method"}}],[11,"clone","","",27,{"inputs":[{"name":"self"}],"output":{"name":"statuscode"}}],[11,"deref","cargonauts::clients","",37,null],[11,"drop","","",37,null],[11,"call","","",37,null],[11,"default","","",29,{"inputs":[],"output":{"name":"config"}}],[11,"clone","cargonauts::server::pool","",38,{"inputs":[{"name":"self"}],"output":{"name":"pool"}}],[11,"clone","cargonauts::clients","",29,{"inputs":[{"name":"self"}],"output":{"name":"config"}}],[11,"deserialize","","",29,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"deref_mut","","",37,null],[11,"fmt","cargonauts::server","",39,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",39,{"inputs":[{"name":"self"}],"output":{"name":"handle"}}],[11,"default","cargonauts::config","",40,{"inputs":[],"output":{"name":"cargonautsconfig"}}],[11,"deserialize","","",40,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","cargonauts","",34,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"call","cargonauts::clients::mock","",41,null],[11,"hash","cargonauts::formats::def","",42,null],[11,"cmp","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"ordering"}}],[11,"new_service","cargonauts::clients::mock","",41,null],[11,"description","cargonauts","",34,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",34,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"eq","cargonauts::methods::def","",16,{"inputs":[{"name":"self"},{"name":"kind"}],"output":{"name":"bool"}}],[11,"eq","cargonauts::formats::def","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"ne","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"fmt","cargonauts","",34,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","cargonauts::formats::def","",42,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"option"}}],[11,"lt","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"le","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"gt","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"ge","","",42,{"inputs":[{"name":"self"},{"name":"templatekey"}],"output":{"name":"bool"}}],[11,"from","cargonauts","",34,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"default","cargonauts::clients::mock","",41,{"inputs":[],"output":{"name":"mockconnection"}}],[11,"clone","cargonauts::formats::def","",42,{"inputs":[{"name":"self"}],"output":{"name":"templatekey"}}],[11,"clone","cargonauts","",43,{"inputs":[{"name":"self"}],"output":{"name":"environment"}}],[11,"clone","cargonauts::clients::mock","",41,{"inputs":[{"name":"self"}],"output":{"name":"mockconnection"}}],[11,"clone","cargonauts::methods::def","",16,{"inputs":[{"name":"self"}],"output":{"name":"kind"}}],[11,"hash","cargonauts::formats::jsonapi","",20,null],[11,"receive_request","cargonauts::formats","",44,null],[11,"present_unit","","",44,null],[11,"present_resource","","",44,null],[11,"present_collection","","",44,null],[11,"present_error","","",44,{"inputs":[{"name":"rc"},{"name":"error"},{"name":"environment"}],"output":{"name":"box"}}],[11,"receive_request","","",45,null],[11,"present_unit","","",45,null],[11,"present_resource","","",45,null],[11,"present_collection","","",45,null],[11,"present_error","","",45,{"inputs":[{"name":"rc"},{"name":"error"},{"name":"environment"}],"output":{"name":"box"}}],[11,"receive_request","","",46,null],[11,"present_unit","","",46,null],[11,"present_resource","","",46,null],[11,"present_collection","","",46,null],[11,"present_error","","",46,{"inputs":[{"name":"rc"},{"name":"error"},{"name":"environment"}],"output":{"name":"box"}}],[11,"call","cargonauts::methods","",11,null],[11,"call","","",7,null],[11,"call","","",8,null],[11,"call","","",2,null],[11,"call","","",5,null],[11,"call","","",3,null],[11,"call","","",9,null],[11,"call","","",10,null],[11,"eq","cargonauts::formats::jsonapi","",20,{"inputs":[{"name":"self"},{"name":"clientidpolicy"}],"output":{"name":"bool"}}],[11,"call","cargonauts::methods","",4,null],[11,"call","","",6,null],[11,"build","cargonauts::formats","",45,null],[11,"build","","",44,null],[11,"build","","",46,null],[11,"default","","",45,{"inputs":[],"output":{"name":"simpledebug"}}],[11,"clone","","",45,{"inputs":[{"name":"self"}],"output":{"name":"simpledebug"}}],[11,"clone","cargonauts::formats::jsonapi","",20,{"inputs":[{"name":"self"}],"output":{"name":"clientidpolicy"}}],[11,"store","cargonauts","Store a new value in the environment.",43,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"option"}}],[11,"take","","Take a value of a type from the environment.",43,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"contains","","Check if the environment contains a value of the given type.",43,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"conn","","Check out a connection to a service from the connection pool.",43,{"inputs":[{"name":"self"}],"output":{"name":"either"}}],[11,"client","","Check out a high level client from the environment.",43,{"inputs":[{"name":"self"}],"output":{"name":"box"}}],[11,"find_and_parse","cargonauts::config","",40,{"inputs":[],"output":{"name":"result"}}],[11,"project_root","","",40,{"inputs":[{"name":"self"}],"output":{"name":"path"}}],[11,"timeout","","",40,{"inputs":[{"name":"self"}],"output":{"name":"duration"}}],[11,"host","","",40,{"inputs":[{"name":"self"}],"output":{"name":"socketaddr"}}],[11,"templates","","",40,{"inputs":[{"name":"self"}],"output":{"name":"pathbuf"}}],[11,"assets","","",40,{"inputs":[{"name":"self"}],"output":{"name":"pathbuf"}}],[11,"index","","",40,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"conn_cfg","","",40,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"option"}}],[11,"env","","",40,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"option"}}],[11,"new","cargonauts::formats::jsonapi","",47,{"inputs":[{"name":"request"}],"output":{"name":"option"}}],[11,"contains","","",47,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"method","cargonauts::middleware::http","The `Method`, such as `Get`, `Post`, etc.",35,{"inputs":[{"name":"self"}],"output":{"name":"method"}}],[11,"headers","","The headers of the incoming request.",35,{"inputs":[{"name":"self"}],"output":{"name":"headers"}}],[11,"uri","","The target request-uri for this request.",35,{"inputs":[{"name":"self"}],"output":{"name":"uri"}}],[11,"version","","The version of HTTP for this request.",35,{"inputs":[{"name":"self"}],"output":{"name":"httpversion"}}],[11,"remote_addr","","The remote socket address of this request",35,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"path","","The target path of this Request.",35,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"query","","The query string of this Request.",35,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"body","","Take the `Body` of this `Request`.",35,{"inputs":[{"name":"self"}],"output":{"name":"body"}}],[11,"deconstruct","","Deconstruct this Request into its pieces.",35,null],[11,"new","","Create a new Response.",36,{"inputs":[],"output":{"name":"response"}}],[11,"headers","","The headers of this response.",36,{"inputs":[{"name":"self"}],"output":{"name":"headers"}}],[11,"status","","The status of this response.",36,{"inputs":[{"name":"self"}],"output":{"name":"statuscode"}}],[11,"version","","The HTTP version of this response.",36,{"inputs":[{"name":"self"}],"output":{"name":"httpversion"}}],[11,"headers_mut","","Get a mutable reference to the Headers.",36,{"inputs":[{"name":"self"}],"output":{"name":"headers"}}],[11,"set_status","","Set the `StatusCode` for this response.",36,null],[11,"set_body","","Set the body.",36,null],[11,"with_status","","Set the status and move the Response.",36,{"inputs":[{"name":"self"},{"name":"statuscode"}],"output":{"name":"response"}}],[11,"with_header","","Set a header and move the Response.",36,{"inputs":[{"name":"self"},{"name":"h"}],"output":{"name":"response"}}],[11,"with_headers","","Set the headers and move the Response.",36,{"inputs":[{"name":"self"},{"name":"headers"}],"output":{"name":"response"}}],[11,"with_body","","Set the body and move the Response.",36,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"response"}}],[11,"remote","cargonauts::server","Returns a reference to the underlying remote handle to the event loop.",39,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"spawn","","Spawns a new future on the event loop this handle is associated with.",39,null],[11,"spawn_fn","","Spawns a closure on this event loop.",39,null],[11,"id","","Return the ID of the represented Core",39,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"canonical_reason","","Get the standardised `reason-phrase` for this status code.",27,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"class","","Determine the class of a status code, based on its first digit.",27,{"inputs":[{"name":"self"}],"output":{"name":"statusclass"}}],[11,"is_informational","","Check if class is Informational.",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_success","","Check if class is Success.",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_redirection","","Check if class is Redirection.",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_client_error","","Check if class is ClientError.",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_server_error","","Check if class is ServerError.",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_strange_status","","Check if class is NoClass",27,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"new","cargonauts::server::pool","Construct a new pool. This returns a future, because it will attempt to establish the minimum number of connections immediately.",38,{"inputs":[{"name":"c"},{"name":"handle"},{"name":"config"}],"output":{"name":"box"}}],[11,"connection","","Yield a connection from the pool.",38,{"inputs":[{"name":"self"}],"output":{"name":"either"}}],[11,"new_unpooled","cargonauts::clients","This constructor creates a connection which is not stored in a thread pool. It can be useful for purposes in which you need to treat a non-pooled connection as if it were stored in a pool, such as during tests.",37,null],[11,"set","cargonauts::clients::mock","",41,null],[11,"conn","","",41,{"inputs":[{"name":"self"}],"output":{"name":"conn"}}]],"paths":[[8,"Resource"],[8,"Relationship"],[8,"Delete"],[8,"Get"],[8,"Index"],[8,"Patch"],[8,"Post"],[8,"DeleteRelated"],[8,"GetOne"],[8,"GetMany"],[8,"PostRelated"],[8,"UpdateRelated"],[8,"Method"],[8,"ResourceMethod"],[8,"CollectionMethod"],[3,"Route"],[4,"Kind"],[4,"Method"],[8,"ApiSerialize"],[8,"ApiDeserialize"],[4,"ClientIdPolicy"],[8,"Format"],[8,"BuildFormat"],[3,"Template"],[4,"Error"],[8,"Service"],[8,"NewService"],[4,"StatusCode"],[8,"Configure"],[3,"PoolConfig"],[8,"Client"],[8,"ConnectClient"],[3,"Request"],[8,"Middleware"],[3,"Error"],[3,"Request"],[3,"Response"],[3,"Conn"],[3,"Pool"],[3,"Handle"],[3,"CargonautsConfig"],[3,"MockConnection"],[3,"TemplateKey"],[3,"Environment"],[3,"Handlebars"],[3,"Debug"],[3,"JsonApi"],[3,"Fields"]]};
initSearch(searchIndex);
