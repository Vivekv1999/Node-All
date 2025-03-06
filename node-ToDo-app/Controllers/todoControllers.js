const todoData=require("./../Models/Todo")


const getToDoList=async(req,res)=>{
    const data=await todoData.find({})
    res.status(200).json(data)
}

const getSingleToDOData=async(req,res)=>{
    try{
        const {id}=req.params
        const result=await todoData.findById(id)
        res.send(result)
    }
    catch(error){
        res.status(500).json({message:error.message})     
    }
}

///create list
const createToDoList=async (req,res)=>{
    const data=new todoData(req.body)  
    let result=await data.save()
    res.send("created sucessfully")
}

//upadte list
const updateToDoList=async (req,res)=>{
    try{
        const {id}=req.params
        const result=await todoData.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).json({mesage:`can not find this ${id}`})
        }
        else{
            const updatedProduct=await todoData.findById(id)
            res.send(updatedProduct)
        }
    }
    catch(error){
        res.status(500).json({message:error.message})     
    }
}

//delete todo list
const deleteToDoList=async(req,res)=>{
    try{
        const {id}=req.params
        const result=await todoData.findByIdAndDelete(id)
        if(!result){
            res.status(404).json({mesage:`cn not find this ${id} `})
        }
        res.send(result)    
    }
    catch(error){
        res.send(error)
        // res.status(500).json({message:error.message})
    }
}

module.exports={getToDoList,getSingleToDOData,createToDoList,updateToDoList,deleteToDoList}