var express = require ('express');
var router = express.Router();
var Owner = require('../../models/owner.model');
var Pup = require('../../models/pup.model');

router.route('/')
///////////////////////////////////////////////////////////////////////
	 
/////////////Eddie's code////////////////////////////////////////////////////////////////////
	  //GET: api/owners
	  // .get(function(req, res){
	  	//Get all owners
	  // 	Owner.find(function(err, owners) {
	  // 		if(err) {
	  // 			return res.send(500, err);
	  // 		}
	  // 		res.json(owners);
	  // 	});
	  // })
////////////////End of Eddie's code///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
		//GET /register
		.get('/login', function(req, res, next) {
			return res.render('login', {title: 'Sign UP'});
		})
	   // POST / register
	   .post('/login', function(req, res, next) {
	   	if (req.body.firstName &&
	   		req.body.lastName &&
	   		req.body.address &&
	   		req.body.telephone &&
	   		req.body.email &&
	   		req.body.password &&
	   		req.body.confirmPassword) {
	   		//confirm that user typed the same password twice
	   		if(req.body.password !== req.body.confirmPassword) {
	   			var err = new Error('Passwords do not match.');
	   			err.status = 400;
	   			return next(err);
	   		}
	   		//create object with form input
	   		var ownerData = {
	   			firstName: req.body.firstName,
		   		lastName: req.body.lastName,
		   		address: req.body.address,
		   		telephone: req.body.telephone,
		   		email: req.body.email,
		   		nsrRegistration: req.body.nsrRegistration,
		   		password: req.body.password
		   	};
	   		//use schema's 'create' method
	   		Owner.create(ownerData, function(error, user) {
	   			if (error) {
	   				return next(error);
	   			} else {
	   				return res.redirect('/overview');
	   			}
	   		});
	   	} else {
	   		var err = new Error('All fields required');
	   		err.status = 400;
	   		return(err);
	   	}
	   })
	   //Get /login
	   .get('/login', function(req, res, next) {
	   	return res.render('login', {title: 'Log In'});
	   })
	   //POST /login
	   .post('login', function(req, res, next) {
	   	if (req.body.email && req.body.password) {
	   		User.authenticate(req.body.email, req.body.password, function(error, user) {
	   			if (error || !user) {
	   				var err = new Error('Wrong Email or Password');
	   				err.status = 401;
	   				return next(err);
	   			} else {
	   				req.session.userId = user._id;
	   				return res.redirect('/overview');
	   			}
	   		});
	   	} else {
	   		var err = new Error('Email and Password are required.');
	   		err.status = 401;
	   		return next(err);
	   	}
	})
	   //GET /logout
	   .get('/logout', function(req, res, next) {
	   	if (req.session) {
	   		//delete session object
	   		req.session.destroy(function(err) {
	   			if(err) {
	   				return next(err);
	   			} else {
	   				return res.redirct('/');
	   			}
	   		});
	   	}
	   })
//////////Eddie's code/////////////////////////////////////////////////////////////////////////
	  //POST: api/owners
	  // .post(function(req, res){
	  	//Add owner
	  // 	var owner = new Owner(); 
	  	
	  // 	owner.firstName = req.body.firstName;
	  // 	owner.lastName = req.body.lastName;
	  // 	owner.address = req.body.address;
	  // 	owner.telephone = req.body.telephone;
	  // 	owner.email = req.body.email;
	  // 	owner.nsrRegistration = req.body.nsrRegistration;
	  // 	owner.password = req.body.password;

	  // 	owner.save(function(err, owner){
	  // 		if(err) {
	  // 			return res.send(500,err);
	  // 		}
	  // 		return res.json(owner);
	  // 	});
	  // });
///////////End of Eddie's code/////////////////////////////////////////////////////////////////////////////////////
router.route('/:id')
///////////////////////////////////////////////////////////////////////

	  //GET: api/owner/1 * And populate the pups and todo fields *
	  .get(function(req, res){
	  	Owner.findById(req.params.id)
	  		 .populate('pups')
	  		 .populate('todo')
	  		 .exec(function(err, owner) {
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
	  	owner.nsrRegistration = req.body.nsrRegistration;
	  	owner.todoItem = req.body.todoItem;
	  	owner.password = req.body.password;


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
module.exports = router;