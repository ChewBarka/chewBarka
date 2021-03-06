var express = require('express');
var router = express.Router();
var moment = require('moment');
var Owner = require('../../models/owner.model');
var Pup = require('../../models/pup.model');
var Todo = require('../../models/todo.model');
var mid = require('../../middleware/index');


///////////////////////////////////////////////////////////////////////
router.route('/overview')
    .get(mid.requiresLogin, function(req, res, next) {
        if (!req.session.ownerId) {
            var err = new Error("You are not Authorized to view this page.");
            err.status = 403;
            return res.send(err);
        }
        Owner.findById(req.session.ownerId)
            .exec(function(error, owner) {
                if (error) {
                    return res.send(error);
                } else {
                    return res.redirect('overview');
                }
            });
    });

router.route('/:id')

//GET: api/owner/1 * And populate the pups and todo fields *
.get(function(req, res) {
    Owner.findById(req.params.id)
        .populate('pups')
        .populate('todo')
        .exec(function(err, owner) {
            if (err) {
                return res.send(500, err);
            }
            res.json(owner);
        });
})

///////////////////////////////////////////////////////////////////////
//PUT: api/owner/1
.put(function(req, res) {
    //Update a owner
    Owner.findById(req.params.id, function(err, owner) {
        if (err) {
            return res.send(500, err);
        }

        owner.firstName = req.body.firstName;
        owner.lastName = req.body.lastName;
        owner.address = req.body.address;
        owner.zipCode = req.body.zipCode;
        owner.telephone = req.body.telephone;
        owner.email = req.body.email;
        owner.nsrRegistration = req.body.nsrRegistration;
        owner.todoItem = req.body.todoItem;
        owner.password = req.body.password;

        owner.save(function(err, owner) {
            if (err) {
                return res.send(500, err);
            }
            res.json(200);
        });
    });
})

///////////////////////////////////////////////////////////////////////
//DELETE: api/owner/1
.delete(function(req, res) {
    //Delete a owner
    Owner.remove({ _id: req.params.id }, function(err, owner) {
        if (err) {
            return res.send(500);
        }
        res.json(owner);
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id/pet').post(function(req, res) {
    //Add pup
    var pup = new Pup();

    pup.name = req.body.name;
    pup.color = req.body.color;
    pup.size = req.body.size;
    pup.weight = req.body.weight;
    pup.allergies = req.body.allergies;
    pup.birthdate = req.body.birthdate;
    // pup.age = moment().diff(pup.birthdate, 'years');
    if (moment().diff(pup.birthdate, 'years') < 1) {
        pup.age = moment().diff(pup.birthdate, 'months') + " mth(s)";
    }
    if (moment().diff(pup.birthdate, 'years') > 1) {
        pup.age = moment().diff(pup.birthdate, 'years') + " yr(s)";
    }
    pup.medConditions = req.body.medConditions;
    pup.chipInformation = req.body.chipInformation;
    pup.picture = req.body.picture;
    pup.morePictures = req.body.morePictures;
    pup.medPDF = req.body.medPDF;
    pup.createdAt = req.body.createdAt;
    pup.owner = req.params.id;

    pup.save(function(err, pup) {
        if (err) {
            return res.send(500, err);
        }

        Owner.findById(req.params.id, function(err, owner) {
            if (err) {
                return res.send(500, err);
            }

            owner.pups.push(pup.id);

            owner.save(function(err, owner) {
                res.json(pup);
            });
        });
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id/todo').post(function(req, res) {
    console.log('hitting the one we want');

    //Add todo
    var todo = new Todo();

    todo.date = req.body.date;
    todo.task = req.body.task;
    todo.owner = req.params.id;

    todo.save(function(err, todo) {
        if (err) {
            return res.send(500, err);
        }

        Owner.findById(req.params.id, function(err, owner) {
            if (err) {
                return res.send(500, err);
            }
            console.log(owner.password);
            owner.todo.push(todo.id);
            console.log(owner.password);

            owner.save(function(err, owner) {
                console.log(owner.password);
                res.json(todo);
            });
        });
    });
});
module.exports = router;
