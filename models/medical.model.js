var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicalSchema = new Schema({
	rabies: {
		type: 'string',
		required: false
	},
	lepto: {
		type: 'string',
		required: false
	},
	dhpp: {
		type: 'string',
		required: false
	},
	bordetella: {
		type: 'string',
		required: false
	},
	chipInfo: {
		type: 'string',
		required: false
	},
	heartWorm: {
		type: 'string',
		required: false
	},
	fleaPrevention: {
		type: 'string',
		required: false
	},
	fecal: {
		type: 'string',
		required: false
	},
	bloodUrine: {
		type: 'string',
		required: false
	},
	nextVisit: {
		type: 'number',
		required: false
	}
});

module.exports = mongoose.model('medical', medicalSchema);