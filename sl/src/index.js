"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const server_1 = __importDefault(require("./Server/server"));
const SERVER = server_1.default.init(80);
SERVER.start(() => {
    console.log("server iniciado");
});
