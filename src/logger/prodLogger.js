import { format, createLogger, transports } from "winston";
const { combine, timestamp, colorize, json } = format;

export default function buildProdLogger() {
    return createLogger({
        format: combine(
            colorize(),
            timestamp(),
            json(),
        ),
        transports: [
            new transports.Console(),
        ],
    });
}
