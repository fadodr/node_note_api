import { ApiError } from "./apiError";

export class ConflictError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Conflict";
    this._statusCode = 409;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
