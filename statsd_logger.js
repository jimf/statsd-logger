require('colors')
var dgram = require('dgram')
var server = dgram.createSocket('udp4')

server.on('error', function (err) {
  console.log('Server error:\n'.red + err.stack.red)
  server.close()
})

server.on('listening', function () {
  var address = server.address()
  console.log('Server listening on ' + address.address + ':' + address.port)
})

server.on('message', function (msg, rinfo) {
  msg.toString()
    .trim()
    .split('\n')
    .forEach(function (metric) {
      var parts = metric.split(':')
      console.log('StatsD Metric: ' + parts[0].blue + ' ' + parts[1].green)
    })
})

server.bind(process.env.PORT || 8125)
