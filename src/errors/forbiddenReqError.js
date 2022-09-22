import { ApiError } from "./apiError";

export class ForbiddenReqError extends ApiError {
  constructor(message) {
    super(message);

    this.message = message ?? "Forbidden";
    this.statusCode = 403;
  }

  message() {
    return this.message;
  }

  statusCode() {
    return this.statusCode;
  }
}
