"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user"));

var _note = _interopRequireDefault(require("./note"));

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/user', _user["default"]);
router.use('/note', _middleware.isAuth, _note["default"]);
var _default = router;
exports["default"] = _default;