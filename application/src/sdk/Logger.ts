import * as elasticsearch from "elasticsearch";
import { Client } from "elasticsearch";
import * as winston from "winston";

export interface ILogguer {
    info(message: string): void;
    serviceCreated(serviceName: string): void;
    serviceMethod(methodName: string, serviceName: string): void;
    repositoryCreated(repositoryName: string): void;
}

class LogElastickSearch {
    private client: Client;
    constructor() {
        this.client = new elasticsearch.Client({
            host: "elasticsearch:9200",
            log: "trace",
        });
    }
    public index(body: any) {
        let datenow = new Date();
        body.date_utc = datenow.toISOString();
        this.client.index({
            body,
            index: "applogger",
            type: "_doc",
          });
    }
    /*
    private async createIndex() {
        await this.client.indices.create({
            index: "applogger",
          });
    }
    */
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
    private transport: LogElastickSearch;
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

        this.transport = new LogElastickSearch();
    }
    public serviceMethod(methodName: string, serviceName: string): void {
        this.loggerApp("service method", {
            event: "method",
            name: methodName,
            service: serviceName,
            type: "service",
            });
    }
    public serviceCreated(serviceName: string): void {
        this.loggerApp("service created", {type: "service", event: "created", name: serviceName});
    }
    public repositoryCreated(repositoryName: string): void {
        this.loggerApp("repository created", {type: "repository", event: "created", name: repositoryName});
    }

    public info(message: string, meta?: any): void {
       this.logger.info(message, meta);
    }
    private loggerApp(message: string, params: object) {
        this.transport.index(params);
        this.info(message, params);
    }
}
