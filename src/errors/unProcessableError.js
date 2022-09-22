import { ApiError } from "./apiError";

export class UnProcessableError extends ApiError {
  constructor(message) {
    super(message);

    this.message = message ?? "Unprocessable Entity";
    this.statusCode = 422;
  }

  message() {
    return this.message;
  }

  statusCode() {
    return this.statusCode;
  }
}
