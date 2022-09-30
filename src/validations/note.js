import { joi } from "../utils";

export const createNoteValSchema = {
  inputVal: joi.object().keys({
    description: joi.string().required(),
    title: joi.string().required(),
  }),
};

export const fetchNoteValSchema = {
  paramsVal: joi.object().keys({
    noteId: joi.objectId().required(),
  }),
};

export const updateNoteValSchema = {
  inputVal: joi.object().keys({
    title: joi.string().allow(null),
    description: joi.string().allow(null),
  }),
  paramsVal: joi.object().keys({
    noteId: joi.objectId().required(),
  }),
};

export const deleteNoteValSchema = {
  paramsVal: joi.object().keys({
    noteId: joi.objectId().required(),
  }),
};
