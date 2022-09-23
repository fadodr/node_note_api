import { ApiError } from "./apiError";

export class UnProcessableError extends ApiError {
  constructor(message) {
    super(message);

    this._message = message ?? "Unprocessable Entity";
    this._statusCode = 422;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
