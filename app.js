import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {test} from './backend/controllers/controllerCliente.js'
import {test2} from './backend/controllers/controllerEstatus.js'
import {test3} from './backend/controllers/controllerProducto.js'
import {test4} from './backend/controllers/controllerVendedor.js'

dotenv.config();


mongoose.connect(process.env.urlbd)
.then (()=>{
    console.log ('si funciona mi conexion a la base de datos')
})
.catch ((error)=> {
    console.log ('no funciona mi conexion a la base datos', error)
})

const app = express();
app.use(cors());

app.listen(4000, ()=>{
    console.log ('funciona mi servidor local')
})

test()
test2()
test3()
test4()
