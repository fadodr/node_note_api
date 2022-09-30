import { ApiError } from "./apiError";

function parseValidationError(details) {
  console.log(details)
  return details.map(({ message, path }) => {
    return {
      message : message.replaceAll('\"', ''),
      path: path.join('.')
    }
  });
};

export class UnProcessableError extends ApiError {
  constructor(details) {
    super("Invalid input");

    this._message = "Invalid input"
    this._details = {
      fields: parseValidationError(details)
    };
    this._statusCode = 422;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }

  get details() {
    return this._details;
  }
}
