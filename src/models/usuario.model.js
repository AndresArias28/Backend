const pool = require('../config/database');
const mysql = require('mysql2');

const Usuario = {
    findAll : async function () {
        return await pool.execute('SELECT * FROM Usuario');
    } ,
    create : async function (UsuarioData) {
        if (!UsuarioData.identificacion || !UsuarioData.nombreUsuario || !UsuarioData.apellidoUsuario || !UsuarioData.emailUsuario || !UsuarioData.contrasenaUsuario || !UsuarioData.direccionUsuario || !UsuarioData.fechaNacimientoUsuario) {
            throw new Error('Todos los campos son requeridos');
        }
    
        const user = `INSERT INTO Usuario (identificacion, nombreUsuario, apellidoUsuario, emailUsuario, contrasenaUsuario, direccionUsuario, fechaNacimientoUsuario )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        return pool.execute(user, [UsuarioData.identificacion, UsuarioData.nombreUsuario, UsuarioData.apellidoUsuario, UsuarioData.emailUsuario, UsuarioData.contrasenaUsuario, UsuarioData.direccionUsuario, UsuarioData.fechaNacimientoUsuario]); 
    },
    findOneUsuario: async function (idUsuario) {
       return await pool.execute('SELECT * FROM Usuario where idUsuario = ?', [idUsuario]);
    },
    editUsuario: async function (idUsuario, NuevoUsuario) {
        try{
            const [result] = await pool.execute(
                `UPDATE Usuario SET identificacion = ?, nombreUsuario = ?, apellidoUsuario = ?, emailUsuario = ?, contrasenaUsuario = ?, direccionUsuario = ?, fechaNacimientoUsuario = ?  WHERE identificacion = ?`, 
                [NuevoUsuario.identificacion, NuevoUsuario.nombreUsuario, NuevoUsuario.apellidoUsuario, NuevoUsuario.emailUsuario, NuevoUsuario.contrasenaUsuario, NuevoUsuario.direccionUsuario, NuevoUsuario.fechaNacimientoUsuario, idUsuario]
            );
            if (result.affectedRows === 0){
                throw new Error('No se encontró el usuario');
            }
            return {mensaje: 'Usuario se actualizó correctamente'};
        }catch (error){
            throw error;
        }
    },    
    DeleteUsaurio: async function (idUsuario) {
        try{
            const [result] =await pool.execute('DELETE FROM Usuario WHERE idUsuario = ?', [idUsuario])
            if(result.affectedRows === 0){
            throw new console.error('Usuario no existe')
            }
            return {message: 'Usuario elimnado existosamente'}
        }catch(error){
            throw error
        }
    }
 

}




module.exports= Usuario;