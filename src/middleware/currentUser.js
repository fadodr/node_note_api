import { verifyToken } from '../utils';
import { config }  from '../configs/configObject';
import { ForbiddenReqError } from '../errors';

export const currentUser = (req, res, next) => {
    const tokenHeader = req.get('Authorization');
    if (!tokenHeader) {
        req.user = null;
        return next();
    }
    const token = tokenHeader.split(' ')[1];
    let tokenDetails;
    try {
        tokenDetails = verifyToken(token, config.jwtAccessToken);
    } catch (err) {
        req.user = null;
        const error = new ForbiddenReqError(err.message)
        return next(error);
    }
    req.user = tokenDetails;
    next();
};