module.exports = function(passport) {
    var JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt,
        secrets = require('../secrets/secrets'),
        Owner = require('../models/owner.model');

    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: secrets.tokenSecret
    };

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        Owner.findOne({ _id: jwt_payload.sub }, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account 
            }
        });
    }));
};
