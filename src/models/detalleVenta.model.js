const pool = require('../config/database');
const mysql = require('mysql2');

const DetalleVenta = {
    findAll: async function () {
        return await pool.execute('SELECT * FROM Detalleventa');
    },
    create: async function (DetalleVentaData) {
        if (!DetalleVentaData.cantidad || !DetalleVentaData.precio_unitario) {
            throw new Error('Todos los campos son requeridos');
        }
        const detalle = `INSERT INTO detalleventa (cantidad, precio_unitario)
        VALUES (?, ?)`;
        return await pool.execute(detalle, [DetalleVentaData.cantidad, DetalleVentaData.precio_unitario]);
    },
    update: async function (idFactura, nuevaFactura) {
        try {
            const [result] = await pool.execute(
                `UPDATE Detalleventa SET  cantidad = ?, precio_unitario = ? WHERE id = ?`,
                [nuevaFactura.cantidad, nuevaFactura.precio_unitario, idFactura]
            );
            if (result.affectedRows === 0) {
                throw new Error('No se encontró la factura');
            }
            return { mensaje: 'Factura se actualizó correctamente' };
        } catch (error) {
            throw error;
        }
    },
    delete: async function (idFactura) {
        try {
            const [result] = await pool.execute(
                `DELETE FROM Detalleventa WHERE id = ?`,
                [idFactura]
            );
            if (result.affectedRows === 0) {
                throw new Error('No se encontró la factura');
            }
            return { mensaje: 'Factura eliminada correctamente' };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = DetalleVenta