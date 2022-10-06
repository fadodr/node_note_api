"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _utils = require("../utils");

var _user = require("../controllers/user");

var _validations = require("../validations");

var router = (0, _express.Router)();
router.post("/signup", (0, _utils.controllerHandler)(_user.signup, _validations.signupValSchema));
router.post("/login", (0, _utils.controllerHandler)(_user.login, _validations.loginValSchema));
router.post("/forgotpassword", (0, _utils.controllerHandler)(_user.forgotPwd, _validations.forgotPwdValSchema));
router.post("/resetpassword", (0, _utils.controllerHandler)(_user.resetPwd, _validations.resetPwdValSchema));
router.post("/refreshtoken", (0, _utils.controllerHandler)(_user.refreshToken));
router["delete"]("/logout", (0, _utils.controllerHandler)(_user.logout));
var _default = router;
exports["default"] = _default;