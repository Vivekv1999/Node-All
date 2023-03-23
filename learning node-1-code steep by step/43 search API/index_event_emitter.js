const express=require('express')
const EventEmitter=require("events")   //-->no package --inbuit

const app=express()
const event=new EventEmitter()

let count=0

event.on("countApi",()=>{
    count++
    console.log("count : ",count);
})

app.get("/",(req,res)=>{
    res.send("api called")
    event.emit('countApi')
})

app.get("/poly",(req,res)=>{
    res.send("poly api call")
    event.emit('countApi')
})

app.get("/any",(req,res)=>{
    res.send("any api call")
    event.emit('countApi')
})


app.listen(4000)