import { ApiError } from "./apiError";

export class BadReqError extends ApiError{
    constructor(message) {
        super(message);

        this._message = message ?? 'Bad Request';
        this._statusCode = 400;
    }

    get message() {
        return this._message;
    }

    get statusCode() {
        return this._statusCode;
    }
};