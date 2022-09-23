import { Note } from "../../models";
import { NotFoundError, UnAuthorizedError } from "../../errors";
import { checkIfCanAlterNote } from "../../utils";

export const deleteNote = async ({ params, user }) => {
  const { noteId } = params;
  const userId = user.id;

  const note = await Note.findById(noteId).populate(
    "author",
    "id username email"
  );
  if (!note) throw new NotFoundError("Note with specified noteId not found");

  checkIfCanAlterNote(note, userId);
  await Note.findByIdAndDelete(noteId);

  return;
};
