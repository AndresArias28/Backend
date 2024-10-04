const DetalleVenta = require('../models/detalleVenta.model');

const CreateDetalle = async (DetalleVentaData) => {
    try{
         if (!DetalleVentaData.cantidad || !DetalleVentaData.precio_unitario) {
        throw new Error('Todos los campos son requeridos');
        }
        const detalleVenta = await DetalleVenta.create(DetalleVentaData);
        return detalleVenta;
    }catch(error){
        throw error;
    }
}

const listarFactura = async () => {
    try{
        const [rows] = await DetalleVenta.findAll();
        return rows;
    }catch(error){
        throw error;
    }
}

const EditarFactura = async (idFactura, nuevaFactura) => {
    try{
        const result = await DetalleVenta.update(idFactura, nuevaFactura);
        if (result === 0) {
            throw new Error('No se encontró el usuario');
        }
        return { message: 'Factura se actualizó correctamente' };
    }catch(error){
        throw error;
    }
}

const DeleteFactura = async (idFactura) => {
    try{
        const result = await DetalleVenta.delete(idFactura);
        if (result === 0) {
            throw new Error('No se encontró el usuario');
        }
        return { message: 'Factura eliminada correctamente' };
    }catch(error){
        throw error;
    }
}

module.exports = {
    CreateDetalle,
    listarFactura,
    EditarFactura,
    DeleteFactura
}