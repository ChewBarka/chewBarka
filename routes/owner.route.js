var express = require ('express');
var router = express.Router();
var Owner = require('../models/owner.model');

router.route('/')
///////////////////////////////////////////////////////////////////////

	  //GET: api/owners
	  .get(function(req, res){
	  	//Get all owners
	  	Owner.find(function(err, owners) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(owners);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //POST: api/owners
	  .post(function(req, res){
	  	//Add owner
	  	var owner = new Owner(); 
	  	
	  	owner.firstName = req.body.firstName;
	  	owner.lastName = req.body.lastName;
	  	owner.address = req.body.address;
	  	owner.telephone = req.body.telephone;
	  	owner.email = req.body.email;

	  	owner.save(function(err, owner){
	  		if(err) {
	  			return res.send(500,err);
	  		}
	  		return res.json(owner);
	  	});
	  });

router.route('/:id')
///////////////////////////////////////////////////////////////////////

	  //GET: api/owner/1
	  .get(function(req, res){
	  	//Returns a single owner
	  	Owner.findById(req.params.id, function(err, owner) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(owner);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //PUT: api/owner/1
	  .put(function(req, res){
	  	//Update a owner
	  	Owner.findById(req.params.id, function(err, owner) {
	  		if(err) {
	  			return res.send(500, err);
	  		}

	  	owner.firstName = req.body.firstName;
	  	owner.lastName = req.body.lastName;
	  	owner.address = req.body.address;
	  	owner.telephone = req.body.telephone;
	  	owner.email = req.body.email;

	  	owner.save(function(err, owner) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(200);
	  		});
	  	 });
	  })
///////////////////////////////////////////////////////////////////////
	  //DELETE: api/owner/1
	  .delete(function(req, res){
	  	//Delete a owner
	  	Owner.remove({_id: req.params.id}, function(err, owner) {
	  		if(err) {
	  			return res.send(500);
	  		}
	  		res.json(owner);
	  	});
	  });

///////////////////////////////////////////////////////////////////////
		//Attach a pup to an owner
router.route('/:id/pup')
	  .post(function(req, res) {
	  	var ownerId = req.params.id;
	  	var puppy = req.body;

	  	Owner.findById(ownerId, function(err, owner) {
	  		owner.pups.push(puppy);
	  		owner.save(function() {
	  	    });
	  	});
	  });
module.exports = router;