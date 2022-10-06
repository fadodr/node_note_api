"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _utils = require("../utils");

var _note = require("../controllers/note");

var _validations = require("../validations");

var router = (0, _express.Router)();
router.post("/", (0, _utils.controllerHandler)(_note.createNote, _validations.createNoteValSchema));
router.get("/", (0, _utils.controllerHandler)(_note.fetchAllNotes));
router.get("/:noteId", (0, _utils.controllerHandler)(_note.fetchNote, _validations.fetchNoteValSchema));
router.patch("/:noteId", (0, _utils.controllerHandler)(_note.updateNote, _validations.updateNoteValSchema));
router["delete"]("/:noteId", (0, _utils.controllerHandler)(_note.deleteNote, _validations.deleteNoteValSchema));
var _default = router;
exports["default"] = _default;