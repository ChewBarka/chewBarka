var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var moment = require('moment');
var Owner = require('../../models/owner.model');
var Pup = require('../../models/pup.model');
var Todo = require('../../models/todo.model');
var mid = require('../../middleware/index');

router.route('/')

////////////////LOGIN AND SIGN UP STATES////////////////////////////////////////////////////
//POST /register
// .get(mid.loggedOut, function(req, res, next) {
//  return res.render('login', {title: 'Sign UP'});
// })
.post(mid.loggedOut, function(req, res, next) {
    console.log('route reached!');

    console.log(JSON.stringify(req.body, null, 2));

    if (req.body.firstName &&
        req.body.lastName &&
        req.body.address &&
        req.body.zipCode &&
        req.body.telephone &&
        req.body.email &&
        req.body.password &&
        req.body.confirmPassword) {
        console.log('passed validation');
        //confirm that owner typed the same password twice
        if (req.body.password !== req.body.confirmPassword) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            return next(err);
        }

        console.log('password meets confirm password');

        //create object with form input
        var ownerData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            zipCode: req.body.zipCode,
            telephone: req.body.telephone,
            email: req.body.email,
            nsrRegistration: req.body.nsrRegistration,
            password: req.body.password
        };

        console.log('created the owner object');

        bcrypt.hash(ownerData.password, 8, function(err, hash) {
            if (err) {
                res.status(500).json('there was an error during registration');
            }
            ownerData.password = hash;

            //use schema's 'create' method
            Owner.create(ownerData, function(error, owner) {
                console.log('got info back from mongodb');
                if (error) {
                    console.log('there was an error!');
                    return res.status(500).json(error);
                } else {
                    console.log('go to the overview screen');
                    return res.json(owner._id);
                }
            });
        });

    } else {
        var err = new Error('All fields required');
        err.status = 400;
        return (err);
    }
});

module.exports = router;
