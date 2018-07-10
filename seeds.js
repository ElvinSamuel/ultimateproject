var mongoose = require('mongoose');

// Adding the TestSchema
var TestSchema = require('./models/testSchema.js');

var data = [
	{
		name: 'Testy McTesterson',
		description: 'The best tester in the testing world.'
	},
	{
		name: 'Qualita Assuranca',
		description: "QA Specialist, she was made for the job"
	},
	{
		name: 'Joe Schmoe',
		description: "He's actually a pretty interesting guy."
	}
]

function seedDB(){
	
	console.log('Seed.js is working');
	TestSchema.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log('Removed Test Data');

			data.forEach(function(seed){
				TestSchema.create(seed, function(err, testData){
					if(err){
						console.log(err);
					} else {
						console.log('Added some data');
					}
				});
			});
		}
	});
}

module.exports = seedDB;
