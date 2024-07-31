import {modelo} from '../models/modelProducto.js'

export const test3 = () => 
{
    console.log('si funciona la suncion entre el controlador y el proyecto')
}

modelo.create ({
    nombre: "Playera",
    precio: "500",
    descripcion: "Playera Rapido y Furiosos"
})