"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = __importDefault(require("./router/api"));
class Server {
    static init(port) {
        return new Server(port);
    }
    constructor(port) {
        this.port = port;
        this.app = express();
        this._addRouter();
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
    _addRouter() {
        this.app.use(api_1.default);
    }
}
exports.default = Server;
