const express = require('express');
const router = express.Router();

const{
    CreateDetalleC, ListarDetalleC, EditarDetalleC, DeleteFacturaC
} = require('../controllers/detalleVenta.controller')

router.post('/createDetalle', CreateDetalleC);
router.get('/listarDetalle', ListarDetalleC);
router.put('/updateDetalle/:id', EditarDetalleC);
router.delete('/deleteDetalle/:id', DeleteFacturaC);

module.exports = router;