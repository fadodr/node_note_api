import { joi } from "../utils";

export const createNoteValSchema = {
  inputVal: joi.object().keys({
    title: joi
      .string()
      .required()
      .messages({ "any.required": "title is required" }),
    description: joi.string().allow(null),
  }),
};

export const fetchNoteValSchema = {
  paramsVal: joi.object().keys({
    noteId: joi
      .objectId()
      .required()
      .messages({
        "string.pattern.name": "noteId does not match mongoId pattern",
      }),
  }),
};

export const updateNoteValSchema = {
  inputVal: joi.object().keys({
    title: joi.string().allow(null),
    description: joi.string().allow(null),
  }),
  paramsVal: joi.object().keys({
    noteId: joi.objectId().required().messages({
      "string.pattern.name": "noteId does not match mongoId pattern",
    }),
  }),
};

export const deleteNoteValSchema = {
  paramsVal: joi.object().keys({
    noteId: joi.objectId().required().messages({
      "string.pattern.name": "noteId does not match mongoId pattern",
    }),
  }),
};
