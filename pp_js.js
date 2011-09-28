//-----------------------------------------------------------------------------------------
// ref
// http://sjbrenner.com/2011/beginning-node-js-and-socket-io/
// http://gonzalo123.wordpress.com/2011/05/23/real-time-notifications-part-ii-now-with-node-js-and-socket-io/

//-----------------------------------------------------------------------------------------
// vars
var port = 8080;

var sys = require("sys")
  , fs = require("fs")
  , path = require("path")
  , http = require("http")
  , io = require('socket.io');  // for npm, otherwise use require('./path/to/socket.io') 

//-----------------------------------------------------------------------------------------
// server
server = http.createServer(function(req, res){
	// your normal server code 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	res.write('<h1>I AM A SERVER</h1>'); 
	res.end(); 
	
	log('BROWSED!');
});

server.listen(port);

//-----------------------------------------------------------------------------------------
// socket.io 
var socket = io.listen(server);

socket.on('connection', function(client){
	log('new client is ' + client);
	
	client.send('WELCOME! I AM THE SERVER!');
				
	client.on('message', function(msg){
	
		log(msg);
		
		// broadcast
		socket.broadcast('BROADCAST');
		
		// send to client
		client.send('ONE2ONE');
	});
	
	client.on('disconnect', function(){
		log('disconnect!');
	});
});

sys.puts('Server running at http://127.0.0.1:' + port + '/');

//-----------------------------------------------------------------------------------------

function log(msg){
	//console.log('SERVER: ' + msg);
	sys.log(msg);
}

//-----------------------------------------------------------------------------------------