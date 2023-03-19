const express = require('express')
const path=require('path')

const app = express()
const reqfilter=(req,res,next)=>{
    console.log("reqfilter");
    if(!req.query.age){ 
        res.send("pleae provide age")   //**if we send this --res,send then we can not set next() */
    }
    else if(req.query.age<18){ 
        res.send("Yuo can not access this page")   
    }
    else{
        next()
    }
}

app.use(reqfilter)

app.get("/",(req,res)=>{
    res.send("welcoe to home page")
})
app.get("/user",(req,res)=>{
    res.send("welcoe to User page")
})

app.listen(4000)