"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateAccessToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateAccessToken = function generateAccessToken(_ref) {
  var payload = _ref.payload,
      secret = _ref.secret,
      expiresIn = _ref.expiresIn;
  return _jsonwebtoken["default"].sign(payload, secret, {
    expiresIn: expiresIn
  });
};

exports.generateAccessToken = generateAccessToken;

var verifyToken = function verifyToken(token, secret) {
  return _jsonwebtoken["default"].verify(token, secret);
};

exports.verifyToken = verifyToken;