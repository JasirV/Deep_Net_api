const mongoose = require('mongoose');


const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const Menu = mongoose.model("Menu" , menuSchema);
module.exports = Menu