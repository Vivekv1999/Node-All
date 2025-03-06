//yu can increae size of thred pool 
///!not working on my pc

const crypto=require("node:crypto")

process.env.UV_THREADPOOL_SIZE=8
const MAX_CALLS=8
const start=Date.now()
for(let i=0;i<MAX_CALLS;i++){
    crypto.pbkdf2("paassword","salt",100000,512,"sha512",()=>{
        console.log(`hash: ${i+1} `,Date.now() -start);
    })
}
crypto.pbkdf2Sync("paassword","salt",100000,512,"sha512")



///my cpu cores is 4 then increas ethraed pool size more than 4 it take more time
///-->nor proper beahvour on my pc
///!not working on my pc