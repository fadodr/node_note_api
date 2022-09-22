import { ApiError } from "./apiError";

export class NotFoundError extends ApiError {
  constructor(message) {
    super(message);

    this.message = message ?? 'Not Found';
    this.statusCode = 404;
  }

  message() {
    return this.message;
  }

  statusCode() {
    return this.statusCode;
  }
}
