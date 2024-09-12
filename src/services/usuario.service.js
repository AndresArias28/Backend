//manejamos las solicitudes
const Usuario = require('../models/usuario.model');


const CrearUsuario = async function (UsuarioData) {
    if (!UsuarioData.identificacion || !UsuarioData.nombreUsuario || !UsuarioData.apellidoUsuario) {
        throw new Error('Todos los campos son requeridos');
    }

    try {
        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}


module.exports ={
    CrearUsuario
}