//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();
const {
    CrearUserC
} = require('../controllers/usuario.controller')//importando el controlador del usuario

router.post('/crearUser', CrearUserC);


module.exports = router

//RESUMEN: define una ruta para crear un usuario utilizando el controlador CrearUserC y 
//exporta el objeto router para su uso en la aplicación.

/*---------
const express = require('express');
const router = express.Router();
const {
    CrearUserC,
    CrearRol
} = require('../controllers/usuario.controller')

router.post('/crearUser', CrearUserC);
router.post('/crearUserConRol', CrearUserC);
router.post('/crearRol', CrearRol);

module.exports = router*/