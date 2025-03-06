//if we have dynamic html file than how to show it
//at here we show dynamib=c string name to show in html page

const fs=require("node:fs")
const http=require("node:http")

const server=http.createServer((req,res)=>{
    const name="vishwas"
    res.writeHead(200,{"Content-Type":'text/html'})
    let html=fs.readFileSync("./index.html","utf-8");
    html=html.replace("{{name}}",name)
    res.end(html)
})

server.listen(3000,()=>{
    console.log("server running on port 3000");
})