import mongoose from 'mongoose'

export async function conectar(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Exito Conectandonos A BD")

    }catch(error){

        console.log("Error en la conexion con BD"+error)
    }
}