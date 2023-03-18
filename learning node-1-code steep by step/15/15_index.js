const express=require('express')
const app=express()


app.get("/",(req,res)=>{
    console.log("data from browser param ==>",req.query.name);   //browser url ma name="annundn" name ahiya console ma malse
                                                                 //url ma localhost:4000/?name=anyyayy   refresh apata ahiya dat get thase
    res.send("this is nn home11 page");
})
app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/help",(req,res)=>{
    res.send("this is HELP page");
})

app.listen(4000)