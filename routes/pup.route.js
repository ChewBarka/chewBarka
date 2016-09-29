var express = require ('express');
var router = express.Router();
var Pup = require('../models/pup.model');

router.route('/')
///////////////////////////////////////////////////////////////////////

	  //GET: api/pups
	  .get(function(req, res){
	  	//Get all pups
	  	Pup.find(function(err, pup) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(pup);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //POST: api/pups
	  .post(function(req, res){
	  	//Add pup
	  	var pup = new Pup(); 
	  	
	  	   pup.name = req.body.name;
	  	// user.lastName = req.body.lastName;
	  	// user.address = req.body.address;
	  	// user.telephone = req.body.telephone;
	  	// user.email = req.body.email;

	  	pup.save(function(err, pup){
	  		if(err) {
	  			return res.send(500,err);
	  		}
	  		return res.json(pup);
	  	});
	  });

router.route('/:id')
///////////////////////////////////////////////////////////////////////

	  //GET: api/pup/1
	  .get(function(req, res){
	  	//Returns a single pup
	  	Pup.findById(req.params.id, function(err, pup) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(pup);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //PUT: api/pup/1
	  .put(function(req, res){
	  	//Update a pup
	  	Pup.findById(req.params.id, function(err, pup) {
	  		if(err) {
	  			return res.send(500, err);
	  		}

	  	   pup.name = req.body.name;
	  	// user.lastName = req.body.lastName;
	  	// user.address = req.body.address;
	  	// user.telephone = req.body.telephone;
	  	// user.email = req.body.email;

	  	pup.save(function(err, pup) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(200);
	  		});
	  	 });
	  })

///////////////////////////////////////////////////////////////////////
	  //DELETE: api/pup/1
	  .delete(function(req, res){
	  	//Delete a pup
	  	Pup.remove({_id: req.params.id}, function(err, pup) {
	  		if(err) {
	  			return res.send(500);
	  		}
	  		res.json(pup);
	  	});
	  });

///////////////////////////////////////////////////////////////////////
		//Attach a medRecord to a pup
router.route('/:id/medical')
	  .post(function(req, res) {
	  	var medicalId = req.params.id;
	  	var med = req.body;

	  	Pup.findById(pupId, function(err, pup) {
	  		pup.medical.push(med);
	  		pup.save(function() {
	  	    });
	  	});
	  });
module.exports = router;