const mongoose = require('mongoose');

const estatusCompraSchema = new mongoose.Schema({
  cliente: String,
  producto: String,
  estatus: String,
});

module.exports = mongoose.model('EstatusCompra', estatusCompraSchema);
