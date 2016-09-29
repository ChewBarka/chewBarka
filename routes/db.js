// A simple promise based wrapper fpr mongodb

var config      = require('config'),
    db          = require('mongodb-promises').db(config.db.host, config.db.name);

module.exports = db;