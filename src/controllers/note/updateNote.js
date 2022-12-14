import { Note } from "../../models";
import { NotFoundError } from "../../errors";
import { checkIfCanAlterNote } from "../../utils";

export const updateNote = async ({ input, params, user }) => {
  const { title, description } = input;
  const { noteId } = params;
  const userId = user.id;

  let note = await Note.findById(noteId).populate("author");
  if (!note) throw NotFoundError("Note with specified id not found");

  checkIfCanAlterNote(note, userId);
  const newNote = await Note.findByIdAndUpdate(noteId, { title, description });

  note = await Note.findById(noteId).populate("author", "id username email");
  return {
    code: 200,
    message: "Update successful",
    data: note,
  };
};
