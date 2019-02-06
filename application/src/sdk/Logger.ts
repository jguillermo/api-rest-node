import * as elasticsearch from "elasticsearch";
import { Client } from "elasticsearch";
import * as winston from "winston";

export interface ILogguer {
    info(message: string): void;
    serviceCreated(serviceName: string): void;
    serviceMethod(methodName: string, serviceName: string): void;
    repositoryCreated(repositoryName: string): void;
}

interface ILoggerTrace {
    event: string;
    name: string;
    type: string;
    date_utc?: string;
}

interface ILoggerRepository {
    index(body: ILoggerTrace): void;
}
class LogFake implements ILoggerRepository {

    public index(body: ILoggerTrace) {
        return true;
    }
}
/*
class LogElastickSearch implements ILoggerRepository {
    private client: Client;
    constructor() {
        this.client = new elasticsearch.Client({
            host: "elasticsearch:9200",
            log: "trace",
        });
    }
    public index(body: ILoggerTrace) {
        let datenow = new Date();
        body.date_utc = datenow.toISOString();
        this.client.index({
            body,
            index: "applogger",
            type: "_doc",
          });
    }
    private async createIndex() {
        await this.client.indices.create({
            index: "applogger",
          });
    }
}
 */
export class LoggerWinston implements ILogguer {
    public static getInstance() {
        if (!LoggerWinston.instance) {
            LoggerWinston.instance = new LoggerWinston(new LogFake());
        }
        return LoggerWinston.instance;
    }
    private static instance: LoggerWinston;
    public logger: winston.Logger;
    private transport: ILoggerRepository;
    private constructor(loggerRepository: ILoggerRepository) {
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
        this.transport = loggerRepository;
    }
    public serviceMethod(methodName: string, serviceName: string): void {
        let log: ILoggerTrace = {type: "service", event: "called", name: `${serviceName}-${methodName}`};
        this.loggerApp("service method", log);
    }
    public serviceCreated(serviceName: string): void {

        let log: ILoggerTrace = {type: "service", event: "created", name: serviceName};
        this.loggerApp("service created", log);
    }
    public repositoryCreated(repositoryName: string): void {
        let log: ILoggerTrace = {type: "repository", event: "created", name: repositoryName};
        this.loggerApp("repository created", log);
    }

    public info(message: string, meta?: any): void {
       this.logger.info(message, meta);
    }
    private loggerApp(message: string, params: ILoggerTrace) {
        this.transport.index(params);
        this.info(message, params);
    }
}
