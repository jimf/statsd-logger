# statsd-logger

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Dependency Status][dep-badge]][dep-status]

__statsd-logger__ is a simple server for listening for
[StatsD](https://github.com/etsy/statsd/) messages over UDP and logging them to
the console. This server is intended for local development in place of a true
StatsD server.

Inspired by [Lee Hambley's Dirt simple StatsD server for local development](http://lee.hambley.name/2013/01/26/dirt-simple-statsd-server-for-local-development.html),
but written in Node.

## Installation

Install using npm:

    $ npm install -g statsd-logger

## Usage

Run __statsd-logger__ to begin the logging server:

    $ statsd-logger

Test that the server is working by sending a UDP packet (UNIX environment assumed):

    $ echo "gorets:1|c" | nc -u -w0 127.0.0.1 8125

To override the default port, set the `PORT` environment variable:

    $ PORT=8126 statsd-logger

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/statsd-logger/master.svg
[build-status]: https://travis-ci.org/jimf/statsd-logger
[npm-badge]: https://img.shields.io/npm/v/statsd-logger.svg
[npm]: https://www.npmjs.org/package/statsd-logger
[dep-badge]: https://img.shields.io/david/jimf/statsd-logger.svg
[dep-status]: https://david-dm.org/jimf/statsd-logger
