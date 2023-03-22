const express=require('express')
require("./config")
const products=require("./products")
const app=express()


app.use(express.json())

app.get('/search/:key',async (req,res)=>{
    console.log(req.params.key)
    let data=await products.find({

        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}},
        ]
    })
    res.send(data)
})

app.listen(4000)