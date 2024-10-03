const express = require('express');
const router = express.Router();

const{
    CreateDetalleC
} = require('../controllers/detalleVenta.controller')

//metodo para ejecutar la tabla detalle venta
//router.get('/listarDetalle', ListarDetalleC);
router.post('/createDetalle', CreateDetalleC);

module.exports = router;