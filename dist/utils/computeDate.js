"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateToString = exports.computeDate = exports.computDateFromEpoch = void 0;

var dateToString = function dateToString(timeInSeconds) {
  return computeDate(timeInSeconds).toISOString();
};

exports.dateToString = dateToString;

var computeDate = function computeDate(timeInSeconds) {
  return new Date(Date.now() + timeInSeconds * 1000);
};

exports.computeDate = computeDate;

var computDateFromEpoch = function computDateFromEpoch(epochTime) {
  return new Date(epochTime * 1000);
};

exports.computDateFromEpoch = computDateFromEpoch;