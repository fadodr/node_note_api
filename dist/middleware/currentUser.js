"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentUser = void 0;

var _utils = require("../utils");

var _configObject = require("../configs/configObject");

var _errors = require("../errors");

var currentUser = function currentUser(req, res, next) {
  var tokenHeader = req.get('Authorization');

  if (!tokenHeader) {
    req.user = null;
    return next();
  }

  var token = tokenHeader.split(' ')[1];
  var tokenDetails;

  try {
    tokenDetails = (0, _utils.verifyToken)(token, _configObject.config.jwtAccessToken);
  } catch (err) {
    req.user = null;
    var error = new _errors.ForbiddenReqError(err.message);
    return next(error);
  }

  req.user = tokenDetails;
  next();
};

exports.currentUser = currentUser;