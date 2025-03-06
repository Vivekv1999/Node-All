const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    work:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("todoData",todoSchema)