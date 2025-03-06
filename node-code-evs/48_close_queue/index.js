const fs=require("fs")

const readableStream=fs.createReadStream(__filename);
readableStream.close()
readableStream.on("close",()=>{
    console.log("close queue-->this is from readblestream close");
})
setTimeout(()=>{console.log("settime out")},0)
setImmediate(()=>console.log("chek queue in settimidate "))
Promise.resolve().then(()=>console.log("promisee reslove 1"))
process.nextTick(()=>console.log("this is process.nexttick 1 "))