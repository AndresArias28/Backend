const {CrearUsuario, ActualizarUser, getUserByEmail} = require('../services/usuario.service')

const controller = {}; //define el controlador

controller.CrearUserC = async function (req, res) {
    try {
        const usuarioData = req.body; //valida los campos de usuarios

        if (!usuarioData.identificacion || !usuarioData.nombre || !usuarioData.apellido || !usuarioData.email || !usuarioData.contrasena || !usuarioData.direccion || !usuarioData.fecha_nacimiento) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const user = await CrearUsuario(usuarioData);//Si son correctos se crea el usuario
        res.status(201).json(user);//Si la operación es exitosa, se devuelve un estado 201 con el usuario creado.
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
controller.GetUserByEmailC = async (req, res) => {

    const { email } = req.params;

    try {
        const usuario = await getUserByEmail(email);
        res.status(200).json(usuario);
    } catch (error) {
        if (error.message === 'Usuario no encontrado') {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(500).json({ error: error.message });
    }
}
module.exports = controller;
//exporta el objeto controller que contiene la función CrearUserC, lo que permite que se pueda importar y utilizar en otros archivos.