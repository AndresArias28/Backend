//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();

const {
    //funciones del controller para la tabla usuarios
    CrearUserC, 
    ActualizarUserC, 
    ListarUsuariosC,
} = require('../controllers/usuario.controller')

const {
    //funciones del controller pare la tabla rol
    EditRolC,
    CrearRolC,
    ListarUsuRolC
} = require('../controllers/rol.controller')

//metodos para ejecutar la tabla usuarios
router.get('/listarUsuarios', ListarUsuariosC);
router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);

//metodos para ejecutar la tabla rol
router.get('/listarUsuRol', ListarUsuRolC)
router.post('/crearRol', CrearRolC);
router.put('/actualizarRol', EditRolC);



module.exports = router


