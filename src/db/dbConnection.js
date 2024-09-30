const mongoose = require('mongoose');
console.log(process.env.DB_URL,"fgrfgrf");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL,{dbName:"menu"})
        console.log('Db connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports =connectDB