"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _configObject = require("./configObject");

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV === "development") {
  _mongoose["default"].set("debug", function (collectionName, method, query, doc) {
    _logger["default"].info("".concat(collectionName, ".").concat(method), JSON.stringify(query), doc);
  });
}

var _default = _mongoose["default"].connect(_configObject.config.mongoUrl).then(function (_) {
  _logger["default"].info("database connected succesfully");
})["catch"](function (error) {
  _logger["default"].error(error);
});

exports["default"] = _default;