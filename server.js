// ----------------------------------------------------------------------------

var http = require('http');
var os = require('os');


console.log(os.hostname());
console.log(os.release());

// ----------------------------------------------------------------------------

var port = 8080;
var html_text = 'Hello World\n';


var g_req = -1;
var g_res = -1;

var browser_count = 0;

// ----------------------------------------------------------------------------

http.createServer(function (req, res) {

	if (g_res == -1) {
		g_req = req;
		g_res = res;
	}
	
	browser_count++;
	
	console.log('Browser Refreshed: ' + browser_count);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(html_text);
/* 	res.write('<br />\n'); */
	res.end('There are ' + browser_count + ' browser refreshes!');

}).listen(port, "127.0.0.1");

// ----------------------------------------------------------------------------

console.log('Server running at http://127.0.0.1:/' + port);
setInterval(do_this, 1000);

// ----------------------------------------------------------------------------
// learning
/*
var paths = require.paths;
console.log(paths);

console.log(require.resolve('http'));
console.log(__filename);
console.log(__dirname);

console.log(paths[0]);
console.log('');

process.nextTick(function () {
	console.log('This will not run');
});

*/

// ----------------------------------------------------------------------------

function do_this() {

	console.log('do_this - browser_count is: '+browser_count);
	loads = os.cpus();
	console.log(loads);

	if (g_res != -1) {
/*
		console.log('exit!');
		process.exit(0);
*/
/*
		g_res.writeHead(200, {'Content-Type': 'text/plain'});
		g_res.end(html_text + 'pp');
*/
	}
}

// ----------------------------------------------------------------------------
// EXIT
process.on('exit', function () {
	process.nextTick(function () {
		console.log('This will not run');
	});
	console.log('About to exit.');
});

// ----------------------------------------------------------------------------
// trap control-C
/*
process.stdin.resume();
process.on('SIGINT', function () {
	console.log('Got SIGINT.  Press Control-D to exit.');
	process.exit(1);
});
*/



process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
	html_text = chunk;
	process.stdout.write('data: ' + chunk);
});

/*
process.stdin.on('end', function () {
	process.stdout.write('end');
});
*/