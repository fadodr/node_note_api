"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var config = Object.freeze({
  mongoUrl: process.env.MONGO_URL,
  jwtAccessToken: process.env.JWT_ACCESS_TOKEN
});
exports.config = config;