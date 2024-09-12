//se encarga de manejar las solicitudes relacionadas con los usuarios.

const {CrearUsuario} = require('../services/usuario.service')//importa crearUsuario

const controller = {}; //define el controlador

controller.CrearUserC = async function (req, res) {
    try {
        const usuarioData = req.body; //valida los campos de usuarios

        if (!usuarioData.identificacion || !usuarioData.nombreUsuario || !usuarioData.apellidoUsuario) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const user = await CrearUsuario(usuarioData);//Si son correctos se crea el usuario
        res.status(201).json(user);//Si la operación es exitosa, se devuelve un estado 201 con el usuario creado.
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = controller;
//exporta el objeto controller que contiene la función CrearUserC, lo que permite que se pueda importar y utilizar en otros archivos.