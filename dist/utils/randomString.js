"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandStr = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateRandStr = function generateRandStr(len) {
  return _crypto["default"].randomBytes(len / 2).toString('hex');
};

exports.generateRandStr = generateRandStr;