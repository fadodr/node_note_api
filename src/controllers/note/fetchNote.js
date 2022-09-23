import { Note } from "../../models";
import { NotFoundError, UnAuthorizedError } from "../../errors";

export const fetchNote = async ({ params, user }) => {
  const { noteId } = params;
  const userId = user.id;

  const note = await Note.findById(noteId).populate(
    "author",
    "id username email"
  );
  if (!note) throw new NotFoundError("Note with specified id not found");

  checkIfCanAlterNote(note, userId);
  return {
    code: 200,
    message: "Note retrieved successfully",
    data: note,
  };
};
