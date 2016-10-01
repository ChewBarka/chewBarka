var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pup  = require('./pup.model');


var medicalSchema = new Schema({
	//By Default, I set the expiration dates for all shots to a year -
	//from the date the owner puts in. Come back and adjust this later.

	rabies: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	lepto: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	dhpp: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	bordetella: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	chipInfo: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	heartWorm: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	fleaPrevention: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	fecal: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	bloodUrine: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	nextVisit: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	dentalExam: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	rattleSnakeTraining: {
		type: 'date', 
		expires: '365d',
		required: false
	},
	pups: [{type : mongoose.Schema.ObjectId, ref : 'pups'}]
});

module.exports = mongoose.model('medical', medicalSchema);