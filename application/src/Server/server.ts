import express = require("express");
import router from "./router/api";

export default class Server {

    public static init(port: number) {
        return new Server(port);
    }

    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.addRouter();
    }

    public start(callback: () => void) {
        this.app.listen(this.port, callback);
    }

    private addRouter() {
        this.app.use(router);
    }
}
