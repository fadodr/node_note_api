"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _devLogger = _interopRequireDefault(require("./devLogger"));

var _prodLogger = _interopRequireDefault(require("./prodLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logger = null;

if (process.env.NODE_ENV == 'development') {
  logger = (0, _devLogger["default"])();
} else {
  logger = (0, _prodLogger["default"])();
}

var _default = logger;
exports["default"] = _default;