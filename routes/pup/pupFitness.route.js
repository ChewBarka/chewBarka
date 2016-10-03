var express = require ('express');
var router = express.Router();
var Fitness = require('../../models/fitness.model');
var Pup = require('../../models/pup.model');

////////////////

// Add fitness table to a pup and pup to a fitness table
router.route('/:pupId/:fitnessId').post(function(req, res){
	var pupId = req.params.pupId;
	var fitnessId = req.params.fitnessId;

	// Find pup by their ID
	Pup.findById(pupId, function(err, pup) {	
		if(err) {
			res.send(500, err);
		}
		// Add the pup ID to the pup ID of that fitness 
		pup.fitness.push(fitnessId);

		// Save the pup
		pup.save(function(err, pup){
			if(err) {
			res.send(500, err);
		}
			// Find the fitness by ID, i know
			Fitness.findById(fitnessId, function(err, fitness) {
				if(err) {
					res.send(500, err);
				}	
				// Add the pup ID to the pup ID of that fitness
				fitness.pup.push(fitnessId);

				// Save the fitness
				fitness.save(function(err, fitness) {
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