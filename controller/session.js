'use strict';

var Session = require('../model/session');

/** create function to create Session. */
exports.createToken = function (req, res) {
    Session
    .createToken(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
};
