var express = require('express');
var router  = express.Router();

// Adding Mongo
var TestSchema = require('../models/testSchema');

router.get('/', function(req, res){
	
	TestSchema.find({}, function(err, allTestData){
		if (err) {
			console.log(err);
		} else {
			res.render('/index.html', {
				allTestData: allTestData
			});
		}
	});
});

module.exports = router;
