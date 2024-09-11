
const express = require('express');
const router = express.Router();
const {
    CrearUserC, ActualizarUserC
} = require('../controllers/usuario.controller')


router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);

module.exports = router