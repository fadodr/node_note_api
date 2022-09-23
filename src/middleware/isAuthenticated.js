import { UnAuthorizedError } from '../errors';

export const isAuth = async (req, res, next) => {
    if (!req.user) {
        const error = new UnAuthorizedError('You are not logged in');
        return next(error);
    }
    return next();
};