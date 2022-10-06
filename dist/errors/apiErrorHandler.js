"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiErrorHandler = void 0;

var _apiError = require("./apiError");

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiErrorHandler = function apiErrorHandler(error, req, res, next) {
  var statusCode = 500;
  var message = 'internal server error';

  if (error instanceof _apiError.ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  if (statusCode == 500) _logger["default"].error(error);
  var errorObj;

  if (error.details) {
    errorObj = {
      status: false,
      error: message,
      details: error.details
    };
  } else {
    errorObj = {
      status: false,
      error: message
    };
  }

  return res.status(statusCode).send(errorObj);
};

exports.apiErrorHandler = apiErrorHandler;