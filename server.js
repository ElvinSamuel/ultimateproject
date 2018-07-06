var express = require('express'),
    index   = require('./routes/index.js'),
    path    = require('path'),

    app     = express();

// ==========================
app.use(express.static(path.join(__dirname + '/public')));
// ==========================
// My Routes
// ==========================

   app.use('/', index);
// ==========================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
