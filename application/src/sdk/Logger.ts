import * as winston from "winston";

export interface ILogguer {
    info(message: string): void;
}

export class LoggerWinston implements ILogguer {
    public static getInstance() {
        if (!LoggerWinston.instance) {
            LoggerWinston.instance = new LoggerWinston();
        }
        return LoggerWinston.instance;
    }
    private static instance: LoggerWinston;
    public logger: winston.Logger;
    private constructor() {
        this.logger = winston.createLogger({
            format: winston.format.json(),
            level: "info",
            transports: [
                new winston.transports.Console({ level: "info" }),
            ],
        });
    }

    public info(message: string): void {
       this.logger.info(message);
    }
}
