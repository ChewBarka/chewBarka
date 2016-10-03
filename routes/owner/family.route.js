var express = require ('express');
var router = express.Router();
var Owner = require('../../models/owner.model');
var Pup = require('../../models/pup.model');

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

module.exports = router;