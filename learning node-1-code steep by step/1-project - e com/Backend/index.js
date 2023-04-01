const express = require("express")
require('./Db/config')
const User = require('./Db/User')
const cors = require("cors")
const Product = require("./Db/Product")


const app = express()
app.use(express.json())
app.use(cors())

app.post("/Register", async (req, res) => {
    const userdata = new User(req.body)
    let result = await userdata.save()
    result = result.toObject()
    delete result.password
    res.send(result)
})


app.post('/Login', async (req, res) => {
    console.log(req.body);
    if (req.body.email && req.body.name) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            res.send(user)
        }
        else {
            res.send("no user found")
        }
    }
    else {
        console.log("no logggged in");
    }
}) 



app.post('/add-product',async(req,res)=>{
    let product= new Product(req.body)
    let result= await product.save()
    res.send(result)
})

app.get("/products",async(req,res)=>{
    let product= await Product.find()
    if(product.length>0) res.send(product)
    else{ res.send("no product found ")}
})

app.delete("/product/:id",async (req,res)=>{
    // res.send(req.params)
    const result = await Product.deleteOne({_id:req.params.id}) 
    res.send(result)

})

app.put('/product/:_id',async (req,res)=>{
    const result=await Product.updateOne(
        req.params,
        {$set:req.body}
        )
        res.send(result)
})



//for searching product
app.get("/product/:key",async(req,res)=>{                //same method ma be alaga lag routr no hoy te joy levu--------tevu no chale
    let result= await Product.find({
        "$or":[
            {title:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {description:{$regex:req.params.key}}
        ]
    })
    res.send(result)
})


app.listen(3008)