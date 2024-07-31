import {modelo} from '../models/modelVendedor.js'

export const test4 = () => 
{
    console.log('si funciona la suncion entre el controlador y el proyecto')
}

modelo.create ({
    nombre: "lizeth",
  apellido: "Segovia",
  telefono: "4492024215"
})