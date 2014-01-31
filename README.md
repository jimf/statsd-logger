statsd-logger
=============

Simple script for listening for [StatsD](https://github.com/etsy/statsd/)
messages and logging them to the console. This script is meant to be used for
local development in place of a true StatsD server.

Inspired by [Lee Hambley's Dirt simple StatsD server for local development](http://lee.hambley.name/2013/01/26/dirt-simple-statsd-server-for-local-development.html),
but written in Node.

Installation and Usage
----------------------

    $ npm install -g statsd-logger
    $ statsd-logger

License
-------

The MIT License (MIT)

Copyright (c) 2014 Jim Fitzpatrick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
