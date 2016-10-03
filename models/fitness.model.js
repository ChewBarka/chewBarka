var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pup  = require('./pup.model');

var fitnessSchema = new Schema({
	date: {
		type: 'date',
		required: true
	},
	notes: {
		type: 'string',
		required: false
	},
	pup: [{type : mongoose.Schema.ObjectId, ref : 'pup'}]
});

module.exports = mongoose.model('fitness', fitnessSchema);