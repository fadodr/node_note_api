"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiError = require("./apiError");

Object.keys(_apiError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _apiError[key];
    }
  });
});

var _apiErrorHandler = require("./apiErrorHandler");

Object.keys(_apiErrorHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiErrorHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _apiErrorHandler[key];
    }
  });
});

var _badReqError = require("./badReqError");

Object.keys(_badReqError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _badReqError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badReqError[key];
    }
  });
});

var _conflictError = require("./conflictError");

Object.keys(_conflictError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _conflictError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conflictError[key];
    }
  });
});

var _forbiddenReqError = require("./forbiddenReqError");

Object.keys(_forbiddenReqError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forbiddenReqError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forbiddenReqError[key];
    }
  });
});

var _notFoundError = require("./notFoundError");

Object.keys(_notFoundError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _notFoundError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notFoundError[key];
    }
  });
});

var _unAuthorizedReqError = require("./unAuthorizedReqError");

Object.keys(_unAuthorizedReqError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unAuthorizedReqError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unAuthorizedReqError[key];
    }
  });
});

var _unProcessableError = require("./unProcessableError");

Object.keys(_unProcessableError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unProcessableError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unProcessableError[key];
    }
  });
});