var express  = require('express'),
    index    = require('./routes/index.js'),
    path     = require('path'),
    mongoose = require('mongoose'),

    app      = express();

// ==========================
mongoose.Promise  = global.Promise;
app.use(express.static(path.join(__dirname + '/public')));
mongoose.connect('mongodb://localhost/ultimateWebDev', {useNewUrlParser: true});
// ==========================
// My Routes
// ==========================

   app.use('/', index);
// ==========================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
