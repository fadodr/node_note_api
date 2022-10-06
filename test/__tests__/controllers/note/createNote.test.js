import { describe, expect, it } from "@jest/globals";
import mongoose from "mongoose";
import { createNote } from "../../../../src/controllers/note";

//const userId = new mongoose.Types.ObjectId();

describe("Create note", () => {
  let validNote = {
    title: "fakeTitle",
    description: "fake test description",
  };

  const user = globalThis.__USER__;

  it("should create a note with valid fields successfully", async () => {
    const expResponse = {
      ...validNote,
      author: mongoose.Types.ObjectId(user.id),
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    };

    const createdNote = await createNote({ input: validNote, user });
    expect(createdNote).toBeDefined();
    expect(createdNote).toHaveProperty("data");
    expect(createdNote.code).toBe(201);
    expect(createdNote.data).toEqual(expect.objectContaining(expResponse));
  });

  it("should be throw error with invalid input", () => {
    return expect(
      createNote({ input: { description: validNote.description }, user })
    ).rejects.toThrow();
  });
});
