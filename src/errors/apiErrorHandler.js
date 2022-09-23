import { ApiError } from './apiError';
import logger from '../logger';

export const apiErrorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'internal server error';

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  }
  
  if (statusCode == 500) logger.error(error);
  return res.status(statusCode).send({
    status: false,
    error: message,
  });
};