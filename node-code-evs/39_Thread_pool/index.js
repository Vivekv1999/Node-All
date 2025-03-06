// //it is module like fs module but it is use fr password hashing===>

// const crypto=require("node:crypto")

// const start=Date.now()
// crypto.pbkdf2Sync("paassword","salt",100000,512,"sha512")
// // crypto.pbkdf2Sync("paassword","salt",100000,512,"sha512")
// // crypto.pbkdf2Sync("paassword","salt",100000,512,"sha512")
// console.log("Hash: ",Date.now()-start);

// // each file time contain like --->1000 ms and three file contain time 3000ms(approx)
// //--because of it is sync verson and it blocking code

///=============async --with using libuv threadd pool---============

const crypto=require("node:crypto")

const MAX_CALLS=5
const start=Date.now()
for(let i=0;i<MAX_CALLS;i++){
    crypto.pbkdf2("paassword","salt",100000,512,"sha512",()=>{
        console.log(`hash: ${i+1} `,Date.now() -start);
    })
}
crypto.pbkdf2Sync("paassword","salt",100000,512,"sha512")
///at here you can change main call to call more  pkdf2---and time will remaing same because of each call in diffrent (libuv) thread
// == in short it took less time than sync--pbkdf2sync ---

///--it async method not work with with direct it use call back function at last beacuse of whrn it is in tread after it over with task(function) it working on it(kind of completed to it)



/////---thred  pool sixe is 4 --
// /if ou thake 5function at a time then 5 th function took more time beacuse is waiting to complete any 4 of then and it took place of them
//yo can check max call size to 5 and check time takeig