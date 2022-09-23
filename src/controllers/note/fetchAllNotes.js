import { Note } from "../../models";
import {} from "../../errors";

export const fetchAllNotes = async ({ user }) => {
  const userId = user.id;

  const notes = await Note.find({ author: userId })
    .sort({ createdAt: -1 })
    .populate("author", "id username email");

  return {
    code: 200,
    message: "Note fetched successfully",
    data: notes,
  };
};
