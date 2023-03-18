const express=require('express')
const app=express()


app.get("",(req,res)=>{
    res.send("this is nn home11 page");
})
app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/help",(req,res)=>{
    res.send("this is HELP page");
})

app.listen(4000)