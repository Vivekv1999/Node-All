const http=require("node:http")
const { json } = require("node:stream/consumers")

const server=http.createServer((req,res)=>{
    const superHero={
        firseName:'Bruce',
        LastName:'Wayne'
    }
    res.writeHead(200,{"Content-type":"application/json"})    //Content-type is optional
        // res.end(superHero)    ///--->you can not end object in respoence
        res.end(JSON.stringify(superHero))

})

server.listen(3000,()=>{
    console.log("server is running om port 3000");
})