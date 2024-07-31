import {Schema, model} from 'mongoose'

const vendEsquema = new Schema({
  nombre: String,
  apellido: String,
  telefono: String,
});

module.exports = mongoose.model('Vendedores', vendEsquema);