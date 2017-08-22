require('colors')
var events = require('events')
var test = require('tape')
var createLogger = require('./statsd_logger')

test('basic server creation', function (t) {
  t.plan(1)
  var emitter = new events.EventEmitter()
  emitter.bind = function (port) {
    t.equal(port, 8125, 'binds to default statsd port')
  }
  createLogger({ server: emitter })
})

test('server listening events', function (t) {
  t.plan(1)
  var emitter = new events.EventEmitter()
  emitter.address = function () {
    return { address: '0.0.0.0', port: 8125 }
  }
  emitter.bind = function () {}
  createLogger({
    server: emitter,
    logger: {
      log: function (msg) {
        t.equal(msg, 'Server listening on 0.0.0.0:8125', 'logs address:port of server')
      }
    }
  })
  emitter.emit('listening')
})

test('server error events', function (t) {
  t.plan(2)
  var emitter = new events.EventEmitter()
  var error = new Error('dummy error')
  emitter.bind = function () {}
  emitter.close = function () {
    t.pass('closes server')
  }
  createLogger({
    server: emitter,
    logger: {
      log: function (msg) {
        t.equal(msg, 'Server error:\n'.red + error.stack.red, 'logs error')
      }
    }
  })
  emitter.emit('error', error)
})

test('server message events - single message', function (t) {
  t.plan(1)
  var emitter = new events.EventEmitter()
  emitter.bind = function () {}
  createLogger({
    server: emitter,
    logger: {
      log: function (msg) {
        t.equal(msg, 'StatsD Metric: ' + 'gorets'.blue + ' ' + '1|c'.green)
      }
    }
  })
  emitter.emit('message', 'gorets:1|c')
})

test('server message events - multiple messages', function (t) {
  t.plan(2)
  var emitter = new events.EventEmitter()
  emitter.bind = function () {}
  createLogger({
    server: emitter,
    logger: {
      log: function (msg) {
        t.equal(msg, 'StatsD Metric: ' + 'gorets'.blue + ' ' + '1|c'.green)
      }
    }
  })
  emitter.emit('message', 'gorets:1|c\ngorets:1|c')
})
