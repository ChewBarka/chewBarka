var express = require ('express');
var router = express.Router();
var Fitness = require('../../models/fitness.model');

router.route('/')
///////////////////////////////////////////////////////////////////////

	  //GET: api/fitness
	  .get(function(req, res){
	  	//Get all fitness
	  	Fitness.find(function(err, fitness) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(fitness);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //POST: api/fitness
	  .post(function(req, res){
	  	//Add fitness
	  	var fitness = new Fitness(); 
	  	
	  	   fitness.date = req.body.date;
	  	   fitness.notes = req.body.notes;

	  	fitness.save(function(err, fitness){
	  		if(err) {
	  			return res.send(500,err);
	  		}
	  		return res.json(fitness);
	  	});
	  });

router.route('/:id')
///////////////////////////////////////////////////////////////////////

	  //GET: api/fitness/1
	  .get(function(req, res){
	  	//Returns a single fitness
	  	Fitness.findById(req.params.id, function(err, fitness) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(fitness);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //PUT: api/fitness/1
	  .put(function(req, res){
	  	//Update a fitness
	  	Fitness.findById(req.params.id, function(err, fitness) {
	  		if(err) {
	  			return res.send(500, err);
	  		}

			fitness.date = req.body.date;
	  	    fitness.notes = req.body.notes;

	  	fitness.save(function(err, fitness) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(200);
	  		});
	  	 });
	  })

///////////////////////////////////////////////////////////////////////
	  //DELETE: api/fitness/1
	  .delete(function(req, res){
	  	//Delete a fitness
	  	Fitness.remove({_id: req.params.id}, function(err, fitness) {
	  		if(err) {
	  			return res.send(500);
	  		}
	  		res.json(fitness);
	  	});
	  });


module.exports = router;