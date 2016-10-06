var express = require ('express');
var router = express.Router();
var Pup = require('../../models/pup.model');
var Medical = require('../../models/medical.model');

// Add a med to a pup and pup to a dog
router.route('/:pupId/:medicalId').post(function(req, res){
	var pupId = req.params.pupId;
	var medicalId = req.params.medicalId;

	// Find pup by their ID
	Pup.findById(pupId, function(err, pup) {	
		if(err) {
			res.send(500, err);
		}
		// Add the med ID to the med ID of that pup
		pup.medicalRecord.push(medicalId);

		// Save the pup
		pup.save(function(err, pup){
			if(err) {
			res.send(500, err);
		}
			// Find the med by its ID
			Medical.findById(medicalId, function(err, medical) {
				if(err) {
					res.send(500, err);
				}	
				// Add the pup ID to the pup ID of that med
				medical.pup.push(pupId);

				// Save the med
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