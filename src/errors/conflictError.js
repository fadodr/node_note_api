import { ApiError } from "./apiError";

export class ConflictError extends ApiError {
  constructor(message) {
    super(message);

    this.message = message ?? "Conflict";
    this.statusCode = 409;
  }

  message() {
    return this.message;
  }

  statusCode() {
    return this.statusCode;
  }
}
