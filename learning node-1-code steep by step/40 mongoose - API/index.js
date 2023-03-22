///aaaa-file run karya pa6i j postman ma --enter thavu

const express = require("express")
require('./congif')
const products = require("./product")


const app = express()
app.use(express.json())

app.post("/create", async (req, res) => {
    console.log((req.body));
    let data = new products(req.body)
    let result = await data.save()     //data monogodb ma save thase
    res.send("creted succesfully")   //--postman ma dekhase
})

app.get("/list", async (req, res) => {
    let data = await products.find()
    res.send(data)
})

// app.delete("/delete/:id",async (req,res)=>{                  ///-->1 use kare to niche
app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params);
    // let data=await products.deleteOne({_id:req.params.id})   ///-->1 use kare to uppaer url ma
    let data = await products.deleteOne(req.params)   ///-->1 use kare to uppaer url ma
    res.send(data)
})

app.put("/update/:_id", async (req, res) => {

    let data = await products.updateOne(
        req.params,                                 //at here we upadte throu id ,,but we can update through req.body.  ..name/brand...  --postman ma hiya bod ma pass karavi devu
        { $set: req.body }
    )
    res.send(data)
})

app.listen(4000)