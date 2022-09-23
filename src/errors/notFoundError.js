import { ApiError } from "./apiError";

export class NotFoundError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Not Found";
    this._statusCode = 404;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
