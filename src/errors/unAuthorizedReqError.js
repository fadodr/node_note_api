import { ApiError } from "./apiError";

export class UnAuthorizedError extends ApiError {
  constructor(message) {
    super(message);

    this.message = message ?? "Unauthorized";
    this.statusCode = 401;
  }

  message() {
    return this.message;
  }

  statusCode() {
    return this.statusCode;
  }
}
