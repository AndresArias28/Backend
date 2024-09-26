
const express = require('express');
const router = express.Router();
const {
    CrearUserC, ActualizarUserC, BuscarUsuarioporid
} = require('../controllers/usuario.controller')


router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);
router.get('/buscarUser/:id',BuscarUsuarioporid);

module.exports = router