var http = require('http'),  
    io = require('socket.io'); // for npm, otherwise use require('./path/to/socket.io') 

server = http.createServer(function(req, res){
	// your normal server code 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	res.end('<h1>Hello world</h1>'); 
	
	console.log('server says: browsed!');
});

server.listen(8080);
  
// socket.io 
var socket = io.listen(server);

socket.on('connection', function(client){ 

	console.log('server says: new client is ' + client);
	
	client.on('message', function(msg){
		console.log('server says: message is ' + msg);
	});
	
	client.on('disconnect', function(){
		console.log('server says: disconnect!');
	});
}); 