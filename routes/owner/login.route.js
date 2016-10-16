var express = require('express');
var router = express.Router();
var moment = require('moment');
var Owner = require('../../models/owner.model');
var Pup = require('../../models/pup.model');
var Todo = require('../../models/todo.model');
var mid = require('../../middleware/index');

router.route('/')

        //Get /login
    // .get(mid.requiresLogin, function(req, res, next) {
    //  return res.render('login', {title: 'Log In'});
    // })
    //POST /login
    .post(function(req, res, next) {
        console.log('reached route');
        console.log(JSON.stringify(req.body, null, 2));
        if (req.body.email && req.body.password) {
            console.log('there is a email and password');
            Owner.authenticate(req.body.email, req.body.password, function(error, owner) {
                if (error || !owner) {
                    console.log('uh oh, error', owner);
                    var err = new Error('Wrong Email or Password');
                    err.status = 401;
                    return next(err, req, res);
                } else {
                    console.log('hurray');
                    req.session.ownerId = owner._id;
                    console.log(req.session.ownerId, owner._id);
                    return res.json(owner._id);
                }
            });
        } else {
            var err = new Error('Email and Password are required.');
            err.status = 401;
            return next(err, req, res);
        }
    })

    //GET /logout
    .get(function(req, res, next) {
        console.log('reached logout' + req.session);
        if (req.session) {
            //delete session object
            req.session.destroy(function(err) {
                if (err) {
                    return next(err);
                } else {
                    return res.send(200);
                }
            });
        }
    });

module.exports = router;