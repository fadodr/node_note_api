import crypto from 'crypto';

export const generateRandStr = (len) => {
    return crypto.randomBytes(len / 2).toString('hex');
}