///===>Method-1
// const add=(a,b)=>{
//     return a+b;
// }

// module.exports = add

////=========2
// module.exports =(a,b)=>{
//     return a+b;
// }


///===3 if we have mor than one property
// const add=(a,b)=>{
//     return a+b;
// }
// const Sub=(a,b)=>{
//     return a-b;
// }
// module.exports={
//     add,
//     Sub
// }


///============method--4
// we use module.exports --->while we also use just exports
exports.add = (a, b) => {
    return a + b
}
//--BUt we suggest to use Module.exports  not a just exports