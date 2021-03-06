var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Owner  = require('./owner.model');
var Medical  = require('./medical.model');
var Fitness = require('./fitness.model');

var pupSchema = new Schema({
	name: {
		type: 'string',
		required: true
	},
	color: {
		type: 'string',
		required: true
	},
	size: {
		type: 'string',
		required: true
	},
	weight: {
		type: 'mixed',
		required: true
	},
	allergies: {
		type: 'string',
		required: true
	},
	birthdate: {
		type: 'date',
		required: true
	},
	age: {
		type: 'string',
		required: false
	},
	medConditions: {
		type: 'string',
		required: true
	},
	chipInformation:{
		type: 'number',
		required: false
	},
	picture: {
		type: Schema.Types.Mixed, 
		required: false	
	},
	morePictures: {
		type: Schema.Types.Mixed, 
		required: false
	},
	medPDF: {
		type: Schema.Types.Mixed, 
		required: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	owner: [{type : mongoose.Schema.ObjectId, ref : 'owners'}],
	medicalRecord: [{type : mongoose.Schema.ObjectId , ref : 'medical'}],
	fitness: [{type : mongoose.Schema.ObjectId , ref : 'fitness'}]
});
	pupSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});



module.exports = mongoose.model('pups', pupSchema);