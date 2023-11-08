//Levantar el Servidor
const http = require('http');


//Recupera la App de express
const app = require('./src/app');


//Leemos el fichero de entorno
require('dotenv').config();

//Configurar DB
require('./src/config/db');

//Creación del Servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on('listening', () => {
    console.log(`Escuchando el servidor en puerto ${PORT}`);
});
 
server.on('error', (error) => console.log(error));