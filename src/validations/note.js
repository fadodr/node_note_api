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
    title: joi
      .string()
      .allow(null)
      .messages({ "string.base": "title must be a string" }),
    description: joi
      .string()
      .allow(null)
      .messages({ "string.base": "description must be a string" }),
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
