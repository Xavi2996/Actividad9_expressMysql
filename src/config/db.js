const mysql = require('mysql2');

//Para abrir la conexion de las peticiones SQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DN_NAME
});

global.db = pool.promise();