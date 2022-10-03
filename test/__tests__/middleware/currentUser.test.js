import { afterEach, expect, jest } from "@jest/globals"
import * as jwtUtil from '../../../src/utils/jwt';
import { currentUser } from "../../../src/middleware";

describe('Current user middleware', function () {
    afterEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });


    test('user is set to null when authorization header is absent', function () {
        const req = {
            get: function (arg) {
                return null
            }
        };
        currentUser(req, {}, () => { });
        expect(req).toHaveProperty('user', null);
    });

    test('throws error when authorization is not a bearer token', function () {
        const req = {
            get: function (arg) {
                return 'bcdesf';
            },
        };
        expect(currentUser.bind(this, req, {}, () => { })).toThrowError;
    });

    test('set user to null when there is an error verifying token', function () {
        const req = {
            get: function (arg) {
                return "Bearer faketoken";
            },
        };
        currentUser(req, {}, () => { });
        expect(req).toHaveProperty("user", null);
        expect(currentUser.bind(this, req, {}, () => { })).toThrowError;
    });

    test('yield a user after decoding the jwt', function () {
        const req = {
            get: function (arg) {
                return "Bearer faketoken";
            },
        };
        const mockVerifyToken = jest.spyOn(jwtUtil, 'verifyToken')
            .mockReturnValueOnce({ id: "fakeuserId" });
        currentUser(req, {}, () => { });
        expect(mockVerifyToken).toHaveBeenCalled();
        expect(req).toHaveProperty("user");
        expect(req.user).toEqual({ id: "fakeuserId" });
    });
});