import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import mongoose from "mongoose";
import { createNote } from "../../../../src/controllers/note";

const userId = new mongoose.Types.ObjectId();

describe("Create note", () => {
  let validNote = {
    title: "fakeTitle",
    description: "fake test description",
  };

  it("should create a note with valid fields successfully", async () => {
    const expResponse = {
      ...validNote,
      author: "dhdhdd",
    };
    const createdNote = await createNote({
      input: validNote,
      user: globalThis.__USER__,
    });
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
