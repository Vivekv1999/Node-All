const cluster = require("node:cluster")
const http = require("node:http")

const OS=require("node:os")

console.log(OS.cpus().length);  //check how many fork we use -->///!important

///we can no tue multiple cluster.fork  
//we onlyu suse fork that in our cp logial proces has other wise we use multp frok load on all fork
//check we have how many logical proca and hoe many we use fork ---> OS.cpus().length


//with using npm pacajge we did not require manage fork that use for what our requeirement

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork()
    cluster.fork()
}
else {
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Typr": "text/plain" })
            res.end("Home Page")
        }
        if (req.url === "/slow-page") {
            for (let i = 0; i < 2000000000; i++) { }
            res.writeHead(200, { "Content-Typr": "text/plain" })
            res.end("Slow Page")
        }
    })
    server.listen(8008, () => console.log("server is running on port 8008"))
}

