const http=require("node:http")

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        // res.writeHead(200,{"Content-Typr":"text/plain"})
        res.end("Home Page")
    }
    if(req.url==="/slow-page"){
        for(let i=0;i<20000000;i++){}
        res.writeHead(200,{"Content-Typr":"text/plain"})
        res.end("Slow Page")
    }
})

server.listen(8000,()=>console.log("server is running on port 8000"))


//chrome ma jay ne network jota ---> / vakh te call jaldi thay
                            // ---> /slow-page vakha te var lage   ane pa6u refresh mari jaldi side by ide open kari jovu speed ma
                            //---> / par jata pa6i va lage 6


///lat end---npm install -g pm2
/// and in tremianl runcommand
//-->pm2 start filename.js -i 0     ==>if we enter 0 at her than i get auto require fork use
                                   //--->other wise we use number like 2 ,3 at here than it use 2 ,3 fork as number enter

//at the and of pm2--run in terminal code nbelow
//-----> pm2 stop ileName.js