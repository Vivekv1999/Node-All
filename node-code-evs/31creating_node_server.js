const http=require("node:http")

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"})    //Content-type is optional
    console.log(req);
        res.end("hello world")
})

server.listen(3000,()=>{
    console.log("server is running om port 3000");
})