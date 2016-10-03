var express = require('express');
var router = express.Router();
var Todo = require('../../models/todo.model');
var Owner = require('../../models/owner.model');

////////////////

// Add todo table to an owner and owner to a todo table
router.route('/:ownerId/:todoId').post(function(req, res) {
    var ownerId = req.params.ownerId;
    var todoId = req.params.todoId;

    // Find onwer by their ID
    Owner.findById(ownerId, function(err, owner) {
        if (err) {
            res.send(500, err);
        }
        // Add the todo ID to the todo ID of that owner 
        owner.todo.push(todoId);

        // Save the owner
        owner.save(function(err, owner) {
            if (err) {
                res.send(500, err);
            }
            // Find the todo by ID
            Todo.findById(todoId, function(err, todo) {
                if (err) {
                    res.send(500, err);
                }
                // Add the owner ID to the owner ID of that todo
                todo.owner.push(todoId);

                // Save the todo
                todo.save(function(err, todo) {
                    if (err) {
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
