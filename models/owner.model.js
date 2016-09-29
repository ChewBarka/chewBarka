var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pup  = require('./pup.model');

var ownerSchema = new Schema({
	firstName: {
		type: 'string',
		required: true
	},
	lastName: {
		type: 'string',
		required: true 
	},
	address: {
		type: 'string',
		required: true
	},
	telephone: {
		type: 'number',
		required: true
	},
	email: {
		type: 'string',
		required: true
	},
	pups: [{type : mongoose.Schema.ObjectId , ref : 'pup'}]
});

module.exports = mongoose.model('owners', ownerSchema);