const mongoose=require("mongoose")
const ProductSchem=new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:Number,
    userId:String,
    image:String,
    stock:Number,
})

module.exports=mongoose.model("products",ProductSchem)