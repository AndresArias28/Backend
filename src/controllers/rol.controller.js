const crearUserC = async function (req, res) {
    const usuarioData = req.body;
    try {
        const usuario = await Usuario.create(usuarioData);
        const rol = await crearRol({ nombreRol: 'Rol de prueba', descripcionRol: 'Descripción del rol' });
        await asignarRol(usuario.idUsuario, rol.idRol);
        res.json({ mensaje: 'Usuario creado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
};