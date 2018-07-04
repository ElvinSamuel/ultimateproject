// import the http module from Node
var http = require('http');
var fs   = require('fs');

// simple server
http.createServer(function (req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(process.env.PORT, function(){
	console.log(`Server listening on port ${process.env.PORT}`); // server listening via env variable
});
