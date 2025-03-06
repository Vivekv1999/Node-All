const fs = require("fs")

// fs.readFile(__filename,()=>{
//     console.log("file is reading 1");
// })

// process.nextTick(()=>{console.log("process.next tick");})
// Promise.resolve().then(()=>{console.log("promiss.then resolve");})


//////------- 2nd ----------------
////!important  anu output game te avi sake settimout 0 hoy and i/O 
// setTimeout(()=>{
//     console.log("settime out");
// },0)
// fs.readFile(__filename,()=>{
//     console.log("file is reading 1");
// })


///===============3rd ===============
///===============3rd ===============
fs.readFile(__filename,()=>{
    console.log("file is reading 1");
})
process.nextTick(()=>console.log("this is process.nexttick 1"))
Promise.resolve().then(()=>console.log("promisee reslove 1"))
setTimeout(()=>{
    console.log("settime out");
},1)
for(let i=0;i<20000000;i++){}