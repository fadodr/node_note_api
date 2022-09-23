import { UnAuthorizedError } from '../errors';

export const isAuth = async (req, res, next) => {
    if (!req.user) {
        throw new UnAuthorizedError('You are not logged in');
    }
    return next();
}