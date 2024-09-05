
const express = require('express');
const router = express.Router();
const {
    CrearUserC
} = require('../controllers/usuario.controller')

router.post('/crearUser', CrearUserC);

module.exports = router