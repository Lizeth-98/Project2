import {modelo} from '../models/modelEstatus'

export const test2 = () => 
{
    console.log('si funciona la suncion entre el controlador y el proyecto')
}

modelo.create ({
    cliente: "Fulanito",
    producto: "Pantalon",
    estatus: "pendiente de pago",
})