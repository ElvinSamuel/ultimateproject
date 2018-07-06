var express = require('express'),
    app     = express(),
    index = require('./routes/index.js');

// ==========================
app.use(express.static('./public'));
// ==========================
// My Routes
// ==========================

   app.use('/', index);
// ==========================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
