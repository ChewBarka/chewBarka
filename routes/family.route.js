var express = require ('express');
var router = express.Router();
var Owner = require('../models/owner.model');
var Pup = require('../models/pup.model');
var Medical = require('../models/medical.model');

// Add a dog to an owner and owner to a dog
router.route('/:ownerId/:pupId').post(function(req, res){
	var ownerId = req.params.ownerId;
	var pupId = req.params.pupId;

	// Find owner by their ID
	Owner.findById(ownerId, function(err, owner) {	
		if(err) {
			res.send(500, err);
		}
		// Add the pup ID to the pup ID of that owner
		owner.pups.push(pupId);

		// Save the owner
		owner.save(function(err, owner){
			if(err) {
			res.send(500, err);
		}
			// Find the pup by their ID
			Pup.findById(pupId, function(err, pup) {
				if(err) {
					res.send(500, err);
				}	
				// Add the owner ID to the owner ID of that pup
				pup.owner.push(ownerId);

				// Save the pup
				pup.save(function(err, owner) {
					 if(err) {
					 	res.send(500, err);
					}
					// Respond with a 200
					res.json(200);
				});
			});
		});
	});
});

//Add medical record to a dog
// router.route('/:pupId/:medicalId').post(function(req, res) {
// 	var pupId = req.params.pupId;
// 	var medicalId = req.params.medicalId;

// 	// Find dog by their ID
// 	Pup.findById(pupId, function(err, pup) {
// 		if(err) {
// 			res.send(500, err);
// 		}
// 		// Add a medRecord ID to the medRecord ID of that pup
// 		pup.medicalRecord.push(medicalId);

// 		//Save the pup
// 		pup.save(function(err, pup){
// 			if(err) {
// 				res.send(500, err);
// 			}
// 		// find medRecord by ID
// 		Medical.findById(medicalId, function(err, medical) {
// 			if(err) {
// 				res.send(500, err);
// 			}
// 			// Add a pupId to the pupID of the medRecord
// 			medical.pups.push(pupId);

// 			//save the medRecord
// 			medical.save(function(err, medical) {
// 				if(err) {
// 					res.send(500, err);
// 				}
// 				// Respond with a 200
// 				res.json(200);
// 				});
// 			});
// 		});
// 	});
// });


module.exports = router;