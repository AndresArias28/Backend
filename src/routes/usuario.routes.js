// Esto es el codigo de la ruta para crear un usuario en el backend.
const express = require('express');
const router = express.Router();
const {
    CrearUserC
} = require('../controllers/usuario.controller')

router.post('/crearUser', CrearUserC);

module.exports = router


