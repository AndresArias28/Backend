const pool = require('../config/database');
const mysql = require('mysql2');

const DetalleVenta = {
    findAll: async function() {
        return await pool.execute('SELECT * FROM Detalle_Venta');
    },
    create: async function(DetalleVentaData) {
        if (!DetalleVentaData.cantidad || !DetalleVentaData.precio_unitario) {
            throw new Error('Todos los campos son requeridos');
        }
        const detalle = `INSERT INTO detalleventa (cantidad, precio_unitario)
        VALUES (?, ?)`;
        return await pool.execute(detalle, [DetalleVentaData.cantidad, DetalleVentaData.precio_unitario]);
    }
};

module.exports = DetalleVenta