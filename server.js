var express = require('express'),
    app     = express();

var index = require('./routes/index.js');
// ==========================
// My Routes
// ==========================

   app.use('/', index);
// ==========================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
