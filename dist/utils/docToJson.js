"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docToJson = void 0;

var docToJson = function docToJson(doc, ret, option) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
  return ret;
};

exports.docToJson = docToJson;