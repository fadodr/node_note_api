import { UnAuthorizedError } from "../errors";

export const checkIfCanAlterNote = async (note, userId) => {
  if (note.author.id != userId)
    throw UnAuthorizedError("You do not have access to this note");
  return;
};
