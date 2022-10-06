"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildProdLogger;

var _winston = require("winston");

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    colorize = _winston.format.colorize,
    json = _winston.format.json;

function buildProdLogger() {
  return (0, _winston.createLogger)({
    format: combine(colorize(), timestamp(), json()),
    transports: [new _winston.transports.Console()]
  });
}