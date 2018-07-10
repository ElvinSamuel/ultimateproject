var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
	name: String,
    	description: String
});

module.exports = mongoose.model("TestSchema", testSchema);
