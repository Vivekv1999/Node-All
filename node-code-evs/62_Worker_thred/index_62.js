const http = require("node:http")
const { Worker } = require("node:worker_threads")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Typr": "text/plain" })
        res.end("Home Page")
    }
    if (req.url === "/slow-page") {
        const worker = new Worker("./worker_thread_file")
        worker.on("message", (i) => {
            res.writeHead(200, { "Content-Typr": "text/plain" })
            res.end(`Slow Page ${i}`)
        })
    }
})

server.listen(8000, () => console.log("server is running on port 8000"))

// at here cpu insaceve work we transter on worker thread file--for loop--