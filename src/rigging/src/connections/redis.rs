use std::env;
use std::net::SocketAddr;
use std::net::ToSocketAddrs;

use core::reactor::Handle;
use redis::Redis;
use url::Url;

use super::Configure;

impl Configure for Redis {
    type Config = ();
    fn config(_: (), handle: Handle) -> Redis {
        let addr = addr_from_var("REDIS_HOST", "Redis", 6379);
        Redis::new(addr, handle)
    }
}

fn addr_from_var(var: &str, service: &str, default_port: u16) -> SocketAddr {
    let var_value = env::var(var).unwrap_or_else(|err| match err {
        env::VarError::NotPresent       => panic!("Cannot find address for {}: no {} provided", service, var),
        env::VarError::NotUnicode(x)    => panic!("Cannot find address for {}: {} is not valid unicode: `{:?}`", service, var, x),
    });

    let url: Url = var_value.parse().unwrap_or_else(|err| {
        panic!("Cannot find address for {}: {} is not a valid url: `{}` (err `{}`)", service, var, var_value, err)
    });

    let host = url.with_default_port(|_| Ok(default_port)).unwrap_or_else(|err| {
        panic!("Cannot find address for {}: IO error: {}", service, err)
    });

    let mut addrs = host.to_socket_addrs().unwrap_or_else(|err| {
        panic!("Cannot find address for {}: IO error: {}", service, err)
    });
    
    addrs.next().unwrap_or_else(|| {
        panic!("Cannot find address for {}: URL `{}` parsed successfully but corresponds to no socket address.", service, var_value)
    })
}
