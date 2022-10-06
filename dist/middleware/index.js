"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currentUser = require("./currentUser");

Object.keys(_currentUser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _currentUser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _currentUser[key];
    }
  });
});

var _isAuthenticated = require("./isAuthenticated");

Object.keys(_isAuthenticated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isAuthenticated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isAuthenticated[key];
    }
  });
});