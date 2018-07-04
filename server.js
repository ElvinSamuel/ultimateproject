// import the http module from Node
var http = require('http');

// simple server
http.createServer(function (req, res){
	// Editing server to render HTML instead
	res.writeHead(200, {'Content-Type': 'text/html'}); // http header looks for HTML
	res.write('<h1>Hello World!</h1>'); // simple response
	res.end(); // end the response
}).listen(process.env.PORT, function(){
	console.log(`Server listening on port ${process.env.PORT}`); // server listening via env variable
});
