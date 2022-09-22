import { ApiError } from "./apiError";

export class BadReqError extends ApiError{
    constructor(message) {
        super(message);

        this.message = message ?? 'Bad Request';
        this.statusCode = 400;
    }

    message() {
        return this.message;
    }

    statusCode() {
        return this.statusCode;
    }
}