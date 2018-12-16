import Server from './server/server';
import router from './router/route';


const server = Server.init(8080);

server.app.use(router);

server.start(()=>{
    console.log('server iniciado');
});