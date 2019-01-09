import { logger } from "@app/module";
import "module-alias/register";
import Server from "./Server/server";

const SERVER = Server.init(80);
SERVER.start(() => {
    logger().info("Servidor Iniciado");
});
