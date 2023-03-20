const express=require('express')
const dbconnect=require('./mongodb')
const mongodb=require("mongodb")

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


//1.put--->static way to put data
// app.put("/",async (req,res)=>{
//     const data=await dbconnect()
//     let result=await data.updateOne(
//         {name:"note 9"}             
//         ,{$set:req.body}
//     )
// res.send(result)
// })

//2.put--->static way to put data
app.put("/:name",async (req,res)=>{        // **** poatman url ni put methid ni url ma  ex. -->localhost:4000/lenovo
    const data=await dbconnect()
    let result=await data.updateOne(
        {name:req.params.name}             
        ,{$set:req.body}
    )
res.send(result)
})

///delete 
// app.delete('/:id',async(req,res)=>{  ///***importnt check */
app.delete('/:name',async(req,res)=>{  
    const data=await dbconnect()
    // const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    const result=await data.deleteOne({name:'lava'})
    res.send(result)
})

app.listen(4000)