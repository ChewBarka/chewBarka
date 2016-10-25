var express = require('express');
var router = express.Router();
var User = require('../../models/user.js');
var mid = require('../../middleware/index.js');
//GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
    if (!req.session.userId) {
        var err = new Error("You are not Authorized to view this page.");
        err.status = 403;
        return next(err);
    }
    User.findById(req.session.userId)
        .exec(function(error, user) {
            if (error) {
                return next(error);
            } else {
                return res.sender('profile', { title: 'Profile', name: user.name, favorite: user.favoriteBook });
            }
        });
});
// GET /logout
router.get('/logout', mid.requireLogin, function(req, res, next) {
    if (req.session) {
        //delete session object
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});


// GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
    return res.render('login', { title: 'Log In' });
});
// Post /login
router.post('login', function(req, res, next) {
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function(error, user) {
            if (error || !user) {
                var err = new Error('Wrong Email or Password');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
            }
        });
    } else {
        var err = new Error('Email and Password are required.');
        err.status = 401;
        return next(err);
    }
});
// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
    return res.render('register', { title: 'Sign Up' });
});

//POST / register
router.post('/register', function(req, res, next) {
    if (req.body.email &&
        req.body.name &&
        req.body.password &&
        req.body.confirmPassword) {
        // confirm taht user typed same password twice
        if (req.body.password !== req.body.confirmPassword) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            return next(err);
        }
        // create object with form input
        var userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        };
        //use schema's 'create' method
        User.create(userData, function(error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
            }
        });
    } else {
        var err = new Error('All fields required');
        err.status = 400;
        return next(err);
    }
});
