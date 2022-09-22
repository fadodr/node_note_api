import { format, createLogger, transports } from 'winston';
const { combine, printf , timestamp, colorize } = format;


export default function buildDevLogger() {
    const logFormat = printf(({ level, message,timestamp, stack }) => {
      return `${timestamp} ${level}: ${ stack || message}`;
    });
    return createLogger({
        format: combine(
            colorize(),
            timestamp(),
            logFormat,
        ),
        transports: [
            new transports.Console()
        ]
    });
}