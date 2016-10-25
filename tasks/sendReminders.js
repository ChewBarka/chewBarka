/******************* Mongoose Configuration ***********************/
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/chewBarka');

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));

// //////

// var Owner = require('../models/owner.model');

// Owner.find().populate('pups').exec(function(err, owners) {
// 	owners.forEach(function(owner) {
		
// 		console.log(owner.firstName + ' has ' + owner.pups.length + ' pups');

// 		owner.pups.forEach(function(pup) {

// 			// check the pups medical records
// 			// build up a text message
// 			// send the text message to the owner (see line 15)
// 			console.log('    ' + pup.name);

// 		});
// 	});
// });