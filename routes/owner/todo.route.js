var express = require ('express');
var router = express.Router();
var Todo = require('../../models/todo.model');

router.route('/')
///////////////////////////////////////////////////////////////////////

	  //GET: api/todo
	  .get(function(req, res){
	  	//Get all todo
	  	Todo.find(function(err, todo) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(todo);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //POST: api/todo
	  .post(function(req, res){
	  	//Add todo
	  	var todo = new Todo(); 
	  	
	  	   todo.date = req.body.date;
	  	   todo.task = req.body.task;

	  	todo.save(function(err, todo){
	  		if(err) {
	  			return res.send(500,err);
	  		}
	  		return res.json(todo);
	  	});
	  });

router.route('/:id')
///////////////////////////////////////////////////////////////////////

	  //GET: api/todo/1
	  .get(function(req, res){
	  	//Returns a single todo
	  	Todo.findById(req.params.id, function(err, todo) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(todo);
	  	});
	  })

///////////////////////////////////////////////////////////////////////
	  //PUT: api/todo/1
	  .put(function(req, res){
	  	//Update a todo
	  	Todo.findById(req.params.id, function(err, todo) {
	  		if(err) {
	  			return res.send(500, err);
	  		}

			todo.date = req.body.date;
	  	   todo.task = req.body.task;

	  	todo.save(function(err, todo) {
	  		if(err) {
	  			return res.send(500, err);
	  		}
	  		res.json(200);
	  		});
	  	 });
	  })

///////////////////////////////////////////////////////////////////////
	  //DELETE: api/todo/1
	  .delete(function(req, res){
	  	//Delete a todo
	  	Todo.remove({_id: req.params.id}, function(err, todo) {
	  		if(err) {
	  			return res.send(500);
	  		}
	  		res.json(todo);
	  	});
	  });


module.exports = router;