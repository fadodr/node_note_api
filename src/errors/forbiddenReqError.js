import { ApiError } from "./apiError";

export class ForbiddenReqError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Forbidden";
    this._statusCode = 403;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
