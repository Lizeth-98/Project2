import {Schema, model} from 'mongoose'

const clientEsquema = new Schema({
  nombre: String,
  apellido: String,
  telefono: String,
});

module.exports = mongoose.model('Clientes', clientEsquema);
