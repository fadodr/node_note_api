"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = void 0;

var _mongoose = require("mongoose");

var _utils = require("../utils");

var noteSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  author: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: _utils.docToJson
  }
});
var Note = (0, _mongoose.model)('Note', noteSchema);
exports.Note = Note;