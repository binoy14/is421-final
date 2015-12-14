var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var ResponseSchema = new Schema({
	name : String,
	email : String,
	phone : String,
	location : String,
	message : String
});

module.exports = mongoose.model('Response', ResponseSchema);