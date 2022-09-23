import { Note } from "../../models";

export const createNote = async ({ input, user }) => {
    const { title, description } = input;
    const userId = user.id;

    const note = await Note.create({
        title,
        description,
        author: userId
    });

    return {
        code: 201,
        message: 'New note added successfully',
        data: note,
    };
};