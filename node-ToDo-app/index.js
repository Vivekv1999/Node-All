const express=require("express")
const mongoose=require("mongoose")
const todoData=require("./Models/Todo")
const { getToDoList, getSingleToDOData, createToDoList, updateToDoList, deleteToDoList } = require("./Controllers/todoControllers")
const router = require("./Routes/todoRoute")
require("./config")


const app=express()
const PORT=3000
app.use(express.json())

app.use(router)

app.listen(PORT,()=>{
    console.log("app is running on port ",PORT);
})