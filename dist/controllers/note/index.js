"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createNote = require("./createNote");

Object.keys(_createNote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createNote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createNote[key];
    }
  });
});

var _deleteNote = require("./deleteNote");

Object.keys(_deleteNote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _deleteNote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deleteNote[key];
    }
  });
});

var _fetchAllNotes = require("./fetchAllNotes");

Object.keys(_fetchAllNotes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fetchAllNotes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchAllNotes[key];
    }
  });
});

var _fetchNote = require("./fetchNote");

Object.keys(_fetchNote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fetchNote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchNote[key];
    }
  });
});

var _updateNote = require("./updateNote");

Object.keys(_updateNote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _updateNote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updateNote[key];
    }
  });
});