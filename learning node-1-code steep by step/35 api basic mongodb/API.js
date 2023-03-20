const express=require('express')
const dbconnect=require('./mongodb')

const app=express()
app.use(express.json())  //post method thi post amn amthi avato deta melvavaa mate

app.get('/',async (req,res)=>{
    let data=await dbconnect()
    data= await data.find().toArray()
    console.log(data);
    res.send(data)
}) 

app.post("/",async (req,res)=>{
    console.log(req.body);   //-->niche console ma dekhse
    let data=await dbconnect()
    let result=await data.insertOne(req.body)
    res.send(result)    //postman ma niche --or---browese ma send karse
})

app.listen(4000)