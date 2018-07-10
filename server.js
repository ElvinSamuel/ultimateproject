var express  = require('express'),
    index    = require('./routes/index.js'),
    path     = require('path'),
    mongoose = require('mongoose'),
    seedDB     = require('./seeds.js'),

    app      = express();

// ==========================
mongoose.Promise  = global.Promise;
app.use(express.static(path.join(__dirname + '/public')));
// Added a specific port to get mongo up & running
mongoose.connect('mongodb://localhost:27017/ultimateDevDB', {
		useNewUrlParser: true
	});

// Adding seed data for database
seedDB();

// ==========================
// My Routes
// ==========================

   app.use('/', index);
// ==========================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Ultimate Web Developer Running On Port ${process.env.PORT}`);
});
