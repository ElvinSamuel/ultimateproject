// import the http module from Node
var http = require('http');

// simple server
http.createServer(function (req, res){
	res.write('Hello World!'); // simple response
	res.end(); // end the response
}).listen(process.env.PORT, function(){
	console.log(`Server listening on port ${process.env.PORT}`); // server listening via env variable
});
