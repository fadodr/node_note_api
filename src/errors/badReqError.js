import { ApiError } from "./apiError";

export class BadReqError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Bad Request";
      this._statusCode = 400;
      this._details = null;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }

  get details() {
    return this._details;
  }
};