import { ApiError } from "./apiError";

export class UnAuthorizedError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Unauthorized";
    this._statusCode = 401;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
