const http= require("http")

http.createServer((req,res)=>{
    res.write("<h1>First NOde Server</h1>")
    res.end()
}).listen(4000);