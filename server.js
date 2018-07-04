// import the http module from Node
var http = require('http');

// simple server
http.createServer(function (req, res){
	// Editing server to render HTML instead
	res.writeHead(200, {'Content-Type': 'text/html'}); // http header looks for HTML
	
	var url = req.url;
	if (url === '/about'){
		res.write('<h1>Welcome To The About Page!</h1>'); // simple response
		res.end(); // end the response
	} else if(url === '/contact'){
		res.write('<h1>Welcome To The Contact Page!</h1>');
		res.end();
	} else {
		res.write('<h1>Hello World!</h1>');
		res.end();
	}
}).listen(process.env.PORT, function(){
	console.log(`Server listening on port ${process.env.PORT}`); // server listening via env variable
});
