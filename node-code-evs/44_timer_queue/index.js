///========-->3 quesion ==========
////1at question=============
//  setTimeout(() => {console.log("settimout for 0 sec 111");}, 0);
//  setTimeout(() => {console.log("settimout for 0 sec 222");}, 0);
//  setTimeout(() => {console.log("settimout for 0 sec 333");}, 0);
// process.nextTick(() => console.log("this is process.nextTick 1"))
// process.nextTick(() => {

//     console.log("this is process.nextTick 22")
//     process.nextTick(() => console.log("this is innner ---> process.nextTick "))
// })
// process.nextTick(() => console.log("this is process.nextTick 33"))

// ///!important ----->promise (wrong) -->Promise (coreect)
// Promise.resolve().then(() => console.log("promise.resolve 11"))
// Promise.resolve().then(() => {
//     console.log("promise.resolve 222")
//     process.nextTick(() => console.log("process.nextTick ---inner----promise"))
// }
// )
// Promise.resolve().then(() => console.log("promise.resolve 333"))


// ===============2nd question ===========
// ===============2nd question ===========

//  setTimeout(() => {console.log("settimout for 0 sec 111");}, 0);
//  setTimeout(() => {console.log("settimout for 0 sec 222")
// process.nextTick(()=>console.log("next tick inner settimeout"))}, 0);
//  setTimeout(() => {console.log("settimout for 0 sec 333");}, 0);


// process.nextTick(() => console.log("this is process.nextTick 1"))
// process.nextTick(() => {

//     console.log("this is process.nextTick 22")
//     process.nextTick(() => console.log("this is innner ---> process.nextTick "))
// })
// process.nextTick(() => console.log("this is process.nextTick 33"))

// ///!important ----->promise (wrong) -->Promise (coreect)
// Promise.resolve().then(() => console.log("promise.resolve 11"))
// Promise.resolve().then(() => {
//     console.log("promise.resolve 222")
//     process.nextTick(() => console.log("process.nextTick ---inner----promise"))
// }
// )
// Promise.resolve().then(() => console.log("promise.resolve 333"))


// =================== 3rd question ========
// =================== 3rd question ========
// =================== 3rd question ========



setTimeout(() => {console.log("settimout for 0 sec 111");}, 1000);
setTimeout(() => {console.log("settimout for 0 sec 222")}, 500);
setTimeout(() => {console.log("settimout for 0 sec 333");}, 0);
