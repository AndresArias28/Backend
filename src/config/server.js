const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('../routes/usuario.routes')

const Backend = express();
const port = 3002;

Backend.use(cors({
    origin: 'http://localhost:4200', // Asegúrate de que esta URL coincida con la del frontend de Angular
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitido
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
}));


// Middlewares
Backend.use(express.json());
Backend.use(express.urlencoded({ extended: true }));

Backend.use(usuarioRoutes);

Backend.set('port', process.env.PORT || port );
module.exports = Backend