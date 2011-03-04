var port = 8124;

var net = require('net');

var server = net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  socket.pipe(socket);
})

server.listen(port, "127.0.0.1");