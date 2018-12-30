import Server from "./Server/server";

const SERVER = Server.init(8080);
SERVER.start(() => {
    console.log("server iniciado");
});
