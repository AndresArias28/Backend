//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();

const {
    //funciones del controller para la tabla usuarios
    CrearUserC, 
    ActualizarUserC, 
    ListarUsuariosC,
     GetUserByEmailC, BuscarUsuarioporid,
     LoginC, cerrarSesionC, EliminarUsuarioC
} = require('../controllers/usuario.controller')
const validarTokenMiddleware = require('../middleware/VerificadorToken')


//metodos para ejecutar la tabla usuarios
router.get('/listUsuarios', validarTokenMiddleware, ListarUsuariosC);
router.post('/crearUsuario', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);
router.post('/login', LoginC);
router.post('/cerrarSesion', cerrarSesionC);
router.get('/buscarUser/:id',BuscarUsuarioporid);
router.delete('/deleteUser/:id', EliminarUsuarioC);

module.exports = router


