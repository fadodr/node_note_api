"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlackListToken = void 0;

var _mongoose = require("mongoose");

var blacklistTokenSchema = new _mongoose.Schema({
  token: String,
  expiresIn: Date
});
var BlackListToken = (0, _mongoose.model)("BlacklistTokens", blacklistTokenSchema);
exports.BlackListToken = BlackListToken;