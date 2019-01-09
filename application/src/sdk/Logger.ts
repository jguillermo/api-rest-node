import * as winston from "winston";

export interface ILogguer {
    info(message: string): void;
    serviceCreated(serviceName: string): void;
    serviceMethod(methodName: string, serviceName: string): void;
    repositoryCreated(repositoryName: string): void;
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
            format: winston.format.combine(
                winston.format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                  }),
                  winston.format.colorize({ all: true }),
                  winston.format.simple(),
              ),
            transports: [
                new winston.transports.Console(),
            ],
        });
    }
    public serviceMethod(methodName: string, serviceName: string): void {
        this.logger.info("service method", {
            event: "method",
            name: methodName,
            service: serviceName,
            type: "service",
            });
    }
    public serviceCreated(serviceName: string): void {
        this.logger.info("service created", {type: "service", event: "created", name: serviceName});
    }
    public repositoryCreated(repositoryName: string): void {
        this.logger.info("repository created", {type: "repository", event: "created", name: repositoryName});
    }

    public info(message: string): void {
       this.logger.info(message);
    }
}
