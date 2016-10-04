var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pup  = require('./pup.model');
var Todo = require('./todo.model');

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
	nsrRegistration: {
		type: 'string',
		required: false
	},
	todoItem: {
		type: 'string',
		required: false
	},
	password: {
		type: 'string',
		required: true
	},
	pups: [{type : mongoose.Schema.ObjectId, ref : 'pups'}],
	todo: [{type : mongoose.Schema.ObjectId, ref : 'todo'}]
});

module.exports = mongoose.model('owners', ownerSchema);