const {CreateDetalle, listarFactura, EditarFactura} = require('../services/detalleVenta.service')
const validarCamposRequeridos = require('../middleware/camposRequeridos');
const controller = {}; 

controller.CreateDetalleC = async function (req, res, next) {
    try {
        const DetalleVentaData = req.body;
        if (!DetalleVentaData.cantidad || !DetalleVentaData.precio_unitario) {
            return res.status(400).json({ error: 'Todos los campos son requeridos :#' });
        }
        const detalleVenta = await CreateDetalle(DetalleVentaData);
        res.status(201).json(detalleVenta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

controller.ListarDetalleC = async function (req, res) {
    try {
        const detalleVentas = await listarFactura();
        res.json(detalleVentas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

controller.EditarDetalleC = async function (req, res) {
    try {
        const detalleVentaData = req.body;
        const idDetalle = req.params.id;
        const detalleVenta = await EditarFactura(idDetalle, detalleVentaData);
        res.status(201).json({  detalleVenta });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = controller;