"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forgotPassword = require("./forgotPassword");

Object.keys(_forgotPassword).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forgotPassword[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forgotPassword[key];
    }
  });
});

var _login = require("./login");

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _login[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

var _resetPassword = require("./resetPassword");

Object.keys(_resetPassword).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resetPassword[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resetPassword[key];
    }
  });
});

var _signup = require("./signup");

Object.keys(_signup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _signup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signup[key];
    }
  });
});

var _refreshToken = require("./refreshToken");

Object.keys(_refreshToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _refreshToken[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _refreshToken[key];
    }
  });
});

var _logout = require("./logout");

Object.keys(_logout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _logout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _logout[key];
    }
  });
});