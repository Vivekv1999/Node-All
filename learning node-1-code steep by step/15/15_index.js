const express = require('express')
const path=require('path')

const app = express()
const publicPath=path.join(__dirname,"public")

// app.use(express.static(publicPath))

app.set("view engine","ejs")

app.get("",(req,res)=>{
res.sendFile(`${publicPath}/index.html`)
})
app.get("/about",(_,res)=>{
res.sendFile(`${publicPath}/about.html`)
})
app.get("/profile",(_,res)=>{
    const user={
        name:"nil",
        email:"nil@gmail.com",
        city:"praug"
    }
res.render("profile",{user})
})

app.get("*",(_,res)=>{
    res.sendFile(`${publicPath}/PageNotFound.html`)
})

console.log(publicPath);


app.listen(4000)