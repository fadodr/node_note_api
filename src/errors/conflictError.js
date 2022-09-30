import { ApiError } from "./apiError";

export class ConflictError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Conflict";
    this._statusCode = 409;
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
}
