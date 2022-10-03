import { describe, expect, it } from "@jest/globals";
import { createNote, fetchAllNotes } from "../../../../src/controllers/note";


describe(('Fetch All Notes'), () => {
    let validNote = {
      title: "fakeTitle",
      description: "fake test description",
    };
    it('should return notes if fetch successfully and return an array of length 0', () => {
        return fetchAllNotes({ user: globalThis.__USER__}).then((res) => {
            expect(res).toHaveProperty('data');
            expect(res.data.length).toEqual(0);
        });
    });

    it('should add a note and fetch all notes and then return notes of length 1', async () => {
        await createNote({ input: validNote, user: globalThis.__USER__ });
        return fetchAllNotes({ user: globalThis.__USER__ }).then((res) => {
            expect(res).toHaveProperty("data");
            expect(res.data.length).toEqual(1);
        });
    });
});