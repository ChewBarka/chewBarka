var express = require ('express');
var router = express.Router();
var Owner = require('../models/owner.model');
var Pup = require('../models/pup.model');
var Medical = require('../models/medical.model');


//Add medical record to a dog
router.route('/:pupId/:medicalId').post(function(req, res) {
	var pupId = req.params.pupId;
	var medicalId = req.params.medicalId;

	// Find pup by their ID
	Pup.findById(pupId, function(err, pup) {	
		if(err) {
			res.send(500, err);
		}
		// Add the medical ID to the medical ID of that pup
		pup.medicalRecord.push(medicalId);

		// Save the pup
		pup.save(function(err, pup){
			if(err) {
			res.send(500, err);
		}
			// Find the medical record by its ID
			Medical.findById(medicalId, function(err, medical) {
				if(err) {
					res.send(500, err);
				}	
				// Add the pup ID to the pup ID of that medical record
				medical.pups.push(pupId);

				// Save the medical record
				medical.save(function(err, medical) {
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