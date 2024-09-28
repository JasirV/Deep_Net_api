const mongoose = require('mongoose');


const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://amiameen507:SK1VP11ytENHFeva@cluster0.ligwpvx.mongodb.net/',{dbName:"menu"})
        console.log('Db connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports =connectDB