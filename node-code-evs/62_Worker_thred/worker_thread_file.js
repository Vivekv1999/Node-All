const { parentPort } = require("node:worker_threads")


let i=0
for(i=0;i<2000000000;i++){
    i++
}

parentPort.postMessage(i)