import express from 'express'
const app = express();

import './configs';
import logger from './logger';
import { apiErrorHandler } from './errors';
import { currentUser } from './middleware';
import router from './routes';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(currentUser);
app.use('/api', router);

app.use(apiErrorHandler);

app.listen(3000, () => {
    logger.info('listening on port 3000');
});