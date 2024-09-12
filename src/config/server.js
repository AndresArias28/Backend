//llamar rutas que se van a ejecuar atravez del puerto
const express = require('express'); //importa express para el servidor web
const usuarioRoutes = require('../routes/usuario.routes')//buscar la ruta

const Backend = express();
const port = 3002;
Backend.use(express.json());//poder leer y procesar el formato JSON

Backend.use(usuarioRoutes);


Backend.set('port', process.env.PORT || port );//puerto dinamico
module.exports = Backend//exporta la instancia del servidor web, lo que permite que se pueda importar y utilizar en otros archivos
//se ejecuta a travez de la libreria de express

//RESUMEN: configura el servidor web utilizando Express, registra las rutas para los usuarios y configura el puerto dinámico.