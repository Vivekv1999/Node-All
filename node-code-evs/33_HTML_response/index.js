const http=require("node:http")
const fs=require("node:fs")

const server=http.createServer((req,res)=>{
    const superHero={
        firseName:'Bruce',
        LastName:'Wayne'
    }
    res.writeHead(200,{"Content-type":"text/html"}) //***imp */===>1 !important   //Content-type is ---text/html === is require===>g=for view hmtl in browser


//-->!important----->now we use file module to excess html file

//--if file size is large than we use other module ---- stream with pipe ------
fs.createReadStream("./index.html").pipe(res)   //-->below and this both are same
// fs.createReadStream(__dirname+ "./index.html").pipe(res)  //not work on my pc

///if file size is small than redffilesync method is good but s we know if file size sis large than it take lost much time//---through buffer---than we did not use this method 
// const html=fs.readFileSync("./index.html","utf-8")
// res.end(html)

//-->1         // res.end("<h1>hello world</h1>")

})

server.listen(3000,()=>{
    console.log("server is running om port 3000");
})