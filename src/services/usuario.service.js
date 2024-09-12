const Usuario = require('../models/usuario.model');

//función asíncrona que crea un nuevo usuario en la base de datos
const CrearUsuario = async function (UsuarioData) {//UsuarioData es un parametro que contiene los datos
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

/*
define un servicio para crear usuarios en una aplicación Node.js. La función CrearUsuario valida los datos del usuario, 
crea un nuevo usuario en la base de datos utilizando el modelo Usuario y maneja errores durante el proceso.
*/

/*const CrearRol = async function (rolData) {
    if (!rolData.nombreRol || !rolData.descripcionRol) {
        throw new Error('Todos los campos son requeridos');
    }
    const rol = `INSERT INTO Rol (nombreRol, descripcionRol)
        VALUES (?, ?)`;
    return pool.execute(rol, [rolData.nombreRol, rolData.descripcionRol]);
};

module.exports ={
    CrearUsuario,
    CrearRol
}*/