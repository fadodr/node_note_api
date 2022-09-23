import { verifyToken } from '../utils';
import { config } from '../configs';

export const currentUser = async (req, res, next) => {
    const tokenHeader = req.get('Authorization');
    if (!tokenHeader) {
        req.user = null;
        return next();
    }
    const token = tokenHeader.split(' ')[1];
    let tokenDetails;
    try {
        tokenDetails = verifyToken(token, config.jwtAccessToken);
    } catch (error) {
        req.user = null;
        return next(error);
    }

    req.user = tokenDetails;
    next();
}