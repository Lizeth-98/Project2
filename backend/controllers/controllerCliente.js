import {modelo} from '../models/modelCliente.js'

export const test = () => 
{
    console.log('si funciona la suncion entre el controlador y el proyecto')
}

modelo.create ({
    nombre: "Bryan",
  apellido: "Mendez",
  telefono: "4492024215"
})