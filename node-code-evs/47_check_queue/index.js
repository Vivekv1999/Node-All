// setImmediate(()=>console.log("set immaidtae 1"))
// setImmediate(()=>{
//     console.log("set immaidtae 1")
//     process.nextTick(()=>console.log("process nexttick"))
//     Promise.resolve().then(()=>console.log("promiss resolve "))
// })
// setImmediate(()=>console.log("set immaidtae 1"))



////===2nd  ===
///at here also settimout is 0 so, ans isn not prdictable.... ///!important--->explation in todak agalana video ma cpp file valu kidhu tu tem 
// setTimeout(()=>{console.log("settimeour 1 call");})
// setImmediate(()=>console.log("set immaidtae 1"))


///=====3rd=====
setTimeout(()=>{console.log("settimeour 1 call");})
setImmediate(()=>console.log("set immaidtae 1"))
for(let i=0;i<20000000;i++){}
//now--result is always predictable ---and settimout is cll fist and hen setimmidate is calling //
////because off long for loop is called //time consumijng fo loop (1 milisond late cover-settimout --explation thodak pahela na video)
