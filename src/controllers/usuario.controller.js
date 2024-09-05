const {CrearUsuario} = require('../services/usuario.service')

const controller = {};

controller.CrearUserC = async function (req, res) {
    try {
        const usuarioData = req.body;

        if (!usuarioData.identificacion || !usuarioData.nombreUsuario || !usuarioData.apellidoUsuario) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const user = await CrearUsuario(usuarioData);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = controller;
