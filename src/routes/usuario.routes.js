//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();
const {
    CrearUserC, ActualizarUserC, GetUserByEmailC
} = require('../controllers/usuario.controller')


router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);
router.get('/obtenerUsuarioPorEmail/:email', GetUserByEmailC);

module.exports = router