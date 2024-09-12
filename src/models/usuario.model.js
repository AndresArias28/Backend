//define un modelo de usuario que se encarga de interactuar con la base de datos para realizar operaciones CRUD 
//(Crear, Leer, Actualizar, Eliminar) sobre los usuarios.

const pool = require('../config/database');
const mysql = require('mysql2');


const Usuario = {
    findAll : async function () {//función asíncrona que devuelve todos los usuarios de la base de datos
        return await pool.execute('SELECT * FROM Usuario');
    } ,
    create : async function (UsuarioData) {//crea un nuevo usuario en la base de datos
        if (!UsuarioData.identificacion || !UsuarioData.nombreUsuario || !UsuarioData.apellidoUsuario) {
            throw new Error('Todos los campos son requeridos');
        }
    
        const user = `INSERT INTO Usuario (identificacion, nombreUsuario, apellidoUsuario)
        VALUES (?, ?, ?)`;
        return pool.execute(user, [UsuarioData.identificacion, UsuarioData.nombreUsuario, UsuarioData.apellidoUsuario]); 
    },
    findOneUsuario: async function (idUsuario) {//devuelve un usuario específico por su ID.
       return await pool.execute('SELECT * FROM Usuario where idUsuario = ?', [idUsuario]);
    },
    editUsuario: async function (idUsuario, NuevoUsuario) {//actualiza un usuario existente en la base de datos
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