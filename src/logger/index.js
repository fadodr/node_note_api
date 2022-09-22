import devLogger from './devLogger';
import prodLogger from './prodLogger';

let logger = null;
if (process.env.NODE_ENV == 'Development') {
    logger = devLogger();
} else {
    logger = prodLogger();
}

export default logger;