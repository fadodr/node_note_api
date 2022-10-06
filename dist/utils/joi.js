"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "joi", {
  enumerable: true,
  get: function get() {
    return _joi["default"];
  }
});
exports.joiValidate = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _joiObjectid = _interopRequireDefault(require("joi-objectid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_joi["default"].objectId = (0, _joiObjectid["default"])(_joi["default"]);

var joiValidate = function joiValidate(valSchema, obj) {
  var _valSchema$validate = valSchema.validate(obj),
      error = _valSchema$validate.error,
      value = _valSchema$validate.value;

  if (error) {
    throw error;
  }

  return value;
};

exports.joiValidate = joiValidate;