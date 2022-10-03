import { expect, jest } from "@jest/globals";
import { isAuth } from "../../../src/middleware/isAuthenticated";

describe("User Authentication", function () {
    it("pass error to the next function when user is not authenticated", function () {
        const req = {
            user: null,
        };
        const nextFn = jest.fn();
        isAuth(req, {}, nextFn);
        expect(nextFn).toHaveBeenCalledWith(expect.any(Error));
    });

    it("call the next function and move to the next middleware if user is authenticated", function () {
        const req = {
            user: { id: 'fakeuserId ' },
        };
        const nextFn = jest.fn();
        isAuth(req, {}, nextFn);
        expect(nextFn).toHaveBeenCalledWith();
    });
});