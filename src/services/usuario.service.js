//manejamos las solicitudes
const Usuario = require('../models/usuario.model');


const CrearUsuario = async function (UsuarioData) {
    if (!UsuarioData.identificacion || !UsuarioData.nombre || !UsuarioData.apellido || !UsuarioData.email || !UsuarioData.contrasena || !UsuarioData.direccion || !UsuarioData.fecha_nacimiento) {
        throw new Error('Todos los campos son requeridos');
    }

    try {
        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}

const ActualizarUser = async function(idUsuario, NuevoUsuario){
    try{
         
        const usuarioActualizado = await Usuario.editUsuario(idUsuario, NuevoUsuario);

        if (!usuarioActualizado) {
            throw new Error('No se pudo actualizar el usuario, o el usuario no existe.');
        }
        
        return usuarioActualizado;
        
    }catch(error){
        throw error;
    }
}


module.exports ={
    CrearUsuario,
    ActualizarUser
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