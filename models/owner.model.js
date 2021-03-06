var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var Pup = require('./pup.model');
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
    pups: [{ type: mongoose.Schema.ObjectId, ref: 'pups' }],
    todo: [{ type: mongoose.Schema.ObjectId, ref: 'todo' }]
});
ownerSchema.statics.authenticate = function(email, password, callback) {
    this.model('owners').findOne({ email: email })
        .exec(function(error, user) {
            console.log('came back with an owner.. i think');
            if (error) {
                console.log('but theres an error');
                console.log(error);
                return callback(error);
            } else if (!user) {
                console.log('user not found');
                var err = new Error('User not found');
                err.status = 401;
                return callback(err);
            }

            console.log('comparing bcrypt stuff');
            console.log('comparing', password, 'with', user.password);
            bcrypt.compare(password, user.password, function(error, result) {
                console.log('bcrypt came back', result);
                if (result == true) {
                    console.log('good stuff happening over here');
                    return callback(null, user);
                } else {
                    console.log(error);
                    return callback();
                }
            });
        });
};

module.exports = mongoose.model('owners', ownerSchema);
