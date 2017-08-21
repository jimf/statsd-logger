var colors = require('colors'),
  dgram = require('dgram'),
  server = dgram.createSocket('udp4');

server.on('error', function(err) {
  console.log('Server error:\n'.red + err.stack.red);
  server.close();
});

server.on('listening', function() {
  var address = server.address();
  console.log('Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(msg, rinfo) {
  var msg_parts = msg.toString().split('\n');
  for (var i = 0; i < msg_parts.length; i++) {
    var parts = msg_parts[i].split(':');
    console.log('StatsD Metric: ' + parts[0].blue + ' ' + parts[1].green);
  }
});

server.bind(process.env.PORT || 8125);
