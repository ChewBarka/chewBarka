var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Owner  = require('./owner.model');

var todoSchema = new Schema({
	date: {
		type: 'date',
		required: true
	},
	task: {
		type: 'string',
		required: true
	},
	owner: [{type : mongoose.Schema.ObjectId, ref : 'owner'}]
});

module.exports = mongoose.model('todo', todoSchema);