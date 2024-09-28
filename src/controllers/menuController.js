const Menu = require('../model/menuSchema')


const createItem = async (req,res)=>{
    try {
        const value = req.body;
        const items = new Menu({...value})
        await items.save()
        res.status(201).json({
            status:'success',
            message:'Successfully Created',
            items
        })
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: "Internal server error",
            error_message: error.message,
          });
    }
}

const getItems = async (req,res)=>{
    try {
        const {category} = req.params
        const items = await Menu.find({category:category})
        res.status(200).json({
            status:"success",
            message:"successfully fetched datas",
            items
        })
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: "Internal server error",
            error_message: error.message,
          });
    }
}

module.exports ={
    createItem,getItems
}