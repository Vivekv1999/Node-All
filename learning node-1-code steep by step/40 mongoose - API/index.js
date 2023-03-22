///aaaa-file run karya pa6i j postman ma --enter thavu

const express=require("express")
require('./congif')
const products=require("./product")


const app=express()
app.use(express.json())

app.post("/create",async (req,res)=>{
    console.log((req.body));
    let data=new products(req.body)  
    let result=await data.save()     //data monogodb ma save thase
    res.send("creted succesfully")   //--postman ma dekhase
})

app.listen(4000)