"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNoteValSchema = exports.fetchNoteValSchema = exports.deleteNoteValSchema = exports.createNoteValSchema = void 0;

var _utils = require("../utils");

var createNoteValSchema = {
  inputVal: _utils.joi.object().keys({
    description: _utils.joi.string().required(),
    title: _utils.joi.string().required()
  })
};
exports.createNoteValSchema = createNoteValSchema;
var fetchNoteValSchema = {
  paramsVal: _utils.joi.object().keys({
    noteId: _utils.joi.objectId().required()
  })
};
exports.fetchNoteValSchema = fetchNoteValSchema;
var updateNoteValSchema = {
  inputVal: _utils.joi.object().keys({
    title: _utils.joi.string().allow(null),
    description: _utils.joi.string().allow(null)
  }),
  paramsVal: _utils.joi.object().keys({
    noteId: _utils.joi.objectId().required()
  })
};
exports.updateNoteValSchema = updateNoteValSchema;
var deleteNoteValSchema = {
  paramsVal: _utils.joi.object().keys({
    noteId: _utils.joi.objectId().required()
  })
};
exports.deleteNoteValSchema = deleteNoteValSchema;