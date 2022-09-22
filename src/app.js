import express from 'express'
const app = express();

import './configs';
import logger from './logger';
import { apiErrorHandler } from './errors';
import router from './routes';

app.use('/api', router);

app.use(apiErrorHandler);

app.listen(3000, () => {
    logger.info('listening on port 3000 ');
});