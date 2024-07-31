import {Schema, model} from 'mongosse'

const productEsquema = new Schema({
  nombre: String,
  precio: Number,
  descripcion: String
});
export const modelo =new model('Productos', productEsquema);
