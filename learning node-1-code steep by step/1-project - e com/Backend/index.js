const express= require("express")
const app=express()


app.get("/",(req,res)=>{
res.send("app is runing")
})


app.listen(4000)