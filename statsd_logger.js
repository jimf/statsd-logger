require('colors')

module.exports = function (options) {
  options = options || {}
  var server = options.server || require('dgram').createSocket('udp4')
  var logger = options.logger || console

  server.on('error', function (err) {
    logger.log('Server error:\n'.red + err.stack.red)
    server.close()
  })

  server.on('listening', function () {
    var address = server.address()
    logger.log('Server listening on ' + address.address + ':' + address.port)
  })

  server.on('message', function (msg, rinfo) {
    msg.toString()
      .trim()
      .split('\n')
      .forEach(function (metric) {
        var parts = metric.split(':')
        logger.log('StatsD Metric: ' + parts[0].blue + ' ' + parts[1].green)
      })
  })

  server.bind(process.env.PORT || options.port || 8125)

  return server
}
