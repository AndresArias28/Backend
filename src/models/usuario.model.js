const pool = require('../config/database');
const mysql = require('mysql2');


const Usuario = {
    findAll : async function () {
        return await pool.execute('SELECT * FROM Usuario');
    } ,
    create : async function (UsuarioData) {
        if (!UsuarioData.identificacion || !UsuarioData.nombreUsuario || !UsuarioData.apellidoUsuario) {
            throw new Error('Todos los campos son requeridos');
        }
    
        const user = `INSERT INTO Usuario (identificacion, nombreUsuario, apellidoUsuario)
        VALUES (?, ?, ?)`;
        return pool.execute(user, [UsuarioData.identificacion, UsuarioData.nombreUsuario, UsuarioData.apellidoUsuario]); 
    },
    findOneUsuario: async function (idUsuario) {
       return await pool.execute('SELECT * FROM Usuario where idUsuario = ?', [idUsuario]);
    },
    editUsuario: async function (idUsuario, NuevoUsuario) {
        try{
            const [result] = await pool.execute(
                `UPDATE Usuario SET identificacion = ?, nombreUsuario = ?, apellidoUsuario = ? WHERE idUsuario = ?`, 
                [NuevoUsuario.identificacion, NuevoUsuario.nombreUsuario, NuevoUsuario.apellidoUsuario, idUsuario]
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