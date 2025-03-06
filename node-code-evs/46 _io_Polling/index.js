const fs=require("fs")

fs.readFile(__filename,()=>{
    console.log("file is reading 1");
})
process.nextTick(()=>console.log("this is process.nexttick 1"))
Promise.resolve().then(()=>console.log("promisee reslove 1"))
setTimeout(()=>{
    console.log("settime out");
},1)
setImmediate(()=>console.log("chek queue in settimidate "))
for(let i=0;i<20000000;i++){}