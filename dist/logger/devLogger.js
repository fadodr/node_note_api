"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildDevLogger;

var _winston = require("winston");

var combine = _winston.format.combine,
    printf = _winston.format.printf,
    timestamp = _winston.format.timestamp,
    colorize = _winston.format.colorize;

function buildDevLogger() {
  var logFormat = printf(function (_ref) {
    var level = _ref.level,
        message = _ref.message,
        timestamp = _ref.timestamp,
        stack = _ref.stack;
    return "".concat(timestamp, " ").concat(level, ": ").concat(stack || message);
  });
  return (0, _winston.createLogger)({
    format: combine(colorize(), timestamp(), logFormat),
    transports: [new _winston.transports.Console()]
  });
}