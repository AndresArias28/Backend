const {CrearUsuario, ActualizarUser} = require('../services/usuario.service')

const controller = {};

controller.CrearUserC = async function (req, res) {
    try {
        const usuarioData = req.body;

        if (!usuarioData.identificacion || !usuarioData.nombreUsuario || !usuarioData.apellidoUsuario || !usuarioData.emailUsuario || !usuarioData.contrasenaUsuario || !usuarioData.direccionUsuario || !usuarioData.fechaNacimientoUsuario) {
            return res.status(400).json({ error: 'Todos los campos son requeridos :(' });
        }

        const user = await CrearUsuario(usuarioData);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

controller.ActualizarUserC = async function (req, res) {
    try{
        const usuarioDatos = req.body;
        const idUsuario = req.params.id;

        // Llamar al servicio para actualizar el usuario
        const user = await ActualizarUser(idUsuario, usuarioDatos)

        // Enviar la respuesta
        return res.status(201).json(user);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = controller;
