import "module-alias/register";
import Server from "./Server/server";

const SERVER = Server.init(80);
SERVER.start(() => {
    console.log("server iniciado");
});
