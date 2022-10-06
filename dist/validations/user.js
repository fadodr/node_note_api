"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupValSchema = exports.resetPwdValSchema = exports.loginValSchema = exports.forgotPwdValSchema = void 0;

var _utils = require("../utils");

var signupValSchema = {
  inputVal: _utils.joi.object().keys({
    username: _utils.joi.string().alphanum().min(3).max(30).required(),
    name: _utils.joi.string().required(),
    email: _utils.joi.string().email().required(),
    password: _utils.joi.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required()
  })
};
exports.signupValSchema = signupValSchema;
var loginValSchema = {
  inputVal: _utils.joi.object().keys({
    email: _utils.joi.string().required(),
    password: _utils.joi.string().required()
  })
};
exports.loginValSchema = loginValSchema;
var forgotPwdValSchema = {
  inputVal: _utils.joi.object().keys({
    email: _utils.joi.string().required()
  })
};
exports.forgotPwdValSchema = forgotPwdValSchema;
var resetPwdValSchema = {
  inputVal: _utils.joi.object().keys({
    password: _utils.joi.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
    confirmPassword: _utils.joi.string().valid(_utils.joi.ref("password"))
  })
};
exports.resetPwdValSchema = resetPwdValSchema;