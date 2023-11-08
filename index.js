//Levantar el Servidor
const http = require('http');

const app = require('./src/app');

require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on('listening', () => {
    console.log(`Escuchando el servidor en puerto ${PORT}`);
});
 
server.on('error', (error) => console.log(error));