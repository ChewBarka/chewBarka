var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Medical  = require('./medical.model');

var pupSchema = new Schema({
	name: {
		type: 'string',
		required: true
	},
	age: {
		type: 'number',
		required: true
	},
	color: {
		type: 'string',
		required: true
	},
	Size: {
		type: 'string',
		required: true
	},
	weight: {
		type: 'number',
		required: true
	},
	allergies: {
		type: 'string',
		required: true
	},
	birthdate: {
		type: 'string',
		required: true
	},
	medConditions: {
		type: 'string',
		required: true
	},
	medicalRecord: [{type : mongoose.Schema.ObjectId , ref : 'medical'}]
});


module.exports = mongoose.model('pups', pupSchema);