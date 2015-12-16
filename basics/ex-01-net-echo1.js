var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo Server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');

console.log('Echo Server running at port 1337');