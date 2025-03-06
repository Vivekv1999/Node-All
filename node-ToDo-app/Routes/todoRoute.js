const express=require("express")
const { getToDoList, getSingleToDOData, createToDoList, updateToDoList, deleteToDoList } = require("../Controllers/todoControllers")

const router=express.Router()

router.get("/",getToDoList)

router.post("/creat",createToDoList)

router.get("/creat/:id",getSingleToDOData)

//for update task
router.post("/creat/:id",updateToDoList)


router.delete("/creat/:id",deleteToDoList)


module.exports=router
