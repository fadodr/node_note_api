import mongoose from "mongoose";
import { config } from "./configObject";
import logger from '../logger';

if (process.env.NODE_ENV === "Development") {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    logger.info(`${collectionName}.${method}`, JSON.stringify(query), doc);
  });
}

export default mongoose
  .connect(config.mongoUrl)
  .then((_) => {
    logger.info("database connected succesfully");
  })
  .catch((error) => {
    logger.error(error);
  });
