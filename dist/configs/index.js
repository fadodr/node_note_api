"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _configObject.config;
  }
});
Object.defineProperty(exports, "db", {
  enumerable: true,
  get: function get() {
    return _database["default"];
  }
});

var _database = _interopRequireDefault(require("./database"));

var _configObject = require("./configObject");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }