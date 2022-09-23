import { Router } from "express";
const router = Router();

import { controllerHandler } from "../utils";
import {
  createNote,
  fetchAllNotes,
  fetchNote,
  updateNote,
  deleteNote,
} from "../controllers/note";

import {
  createNoteValSchema,
  fetchNoteValSchema,
  updateNoteValSchema,
  deleteNoteValSchema,
} from "../validations";

router.post("/", controllerHandler(createNote, createNoteValSchema));
router.get("/", controllerHandler(fetchAllNotes));
router.get("/:noteId", controllerHandler(fetchNote, fetchNoteValSchema));
router.patch("/:noteId", controllerHandler(updateNote, updateNoteValSchema));
router.delete("/:noteId", controllerHandler(deleteNote, deleteNoteValSchema));

export default router;
