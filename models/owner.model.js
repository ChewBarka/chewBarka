var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var Pup  = require('./pup.model');
var Todo = require('./todo.model');

var ownerSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true 
	},
	address: {
		type: String,
		required: true
	},
	zipCode: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	telephone: {
		type: String,
		required: false
	},
	nsrRegistration: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: true
	},
	pups: [{type : mongoose.Schema.ObjectId, ref : 'pups'}],
	todo: [{type : mongoose.Schema.ObjectId, ref : 'todo'}]
});
ownerSchema.statics.authenticate = function(email, password, callback) {
	this.model('owners').findOne({ email: email })
	.exec(function (error, user) {
		if(error) {
			return callback(error);
		} else if (!user) {
			var err = new Error('User not found');
			err.status = 401;
			return callback(err);
		}
		bcrypt.compare(password , user.password, function(error, result) {
			if(result == true) {
				return callback(null, user);
			} else {
				return callback();
			}
		});
	});
};
ownerSchema.pre('save', function(next) {
	var owner = this;
	bcrypt.hash(owner.password, 10, function(err, hash) {
		if (err) {
			return next(err);
		}
		owner.password = hash;
		next();
	});
});

module.exports = mongoose.model('owners', ownerSchema);