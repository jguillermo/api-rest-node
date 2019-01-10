import * as elasticsearch from "elasticsearch";
import * as winston from "winston";

export interface ILogguer {
    info(message: string): void;
    serviceCreated(serviceName: string): void;
    serviceMethod(methodName: string, serviceName: string): void;
    repositoryCreated(repositoryName: string): void;
}

async function add_log(body: any) {
    let client = new elasticsearch.Client({
        host: "elasticsearch:9200",
        log: "trace",
    });

    let datenow = new Date();

    body.date_utc = datenow.toISOString();

    /*await client.indices.create({
        index: 'applogger'
      },function(err,resp,status) {
        if(err) {
            console.log('---error----');
            console.log(err);
        }
        else {
          console.log("create",resp);
        }
      });
    */

    client.index({
        body,
        index: "applogger",
        type: "_doc",

      });
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
        add_log( {
            event: "method",
            name: methodName,
            service: serviceName,
            type: "service",
            });
        this.logger.info("service method", {
            event: "method",
            name: methodName,
            service: serviceName,
            type: "service",
            });
    }
    public serviceCreated(serviceName: string): void {
        add_log({type: "service", event: "created", name: serviceName});
        this.logger.info("service created", {type: "service", event: "created", name: serviceName});
    }
    public repositoryCreated(repositoryName: string): void {
        add_log({type: "repository", event: "created", name: repositoryName});
        this.logger.info("repository created", {type: "repository", event: "created", name: repositoryName});
    }

    public info(message: string): void {
        // add_log()
       this.logger.info(message);
    }
}
