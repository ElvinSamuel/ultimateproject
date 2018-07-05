var express = require('express'),
    app     = express();

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
