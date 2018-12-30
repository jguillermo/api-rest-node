import Server from "./Server/server";
const server = Server.init(8080);
server.start(() => {
    console.log("server iniciado");
});
