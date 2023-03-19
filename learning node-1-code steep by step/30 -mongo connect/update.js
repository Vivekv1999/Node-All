//badhani perticular file call karvi --nodemon ./update.js example

const dbconnect=require('./Mongodb')


const upadteData=async()=>{
let data=await dbconnect()
// let result=await data.updateMany(    //-->all occurence will be updated
let result=await data.updateOne(
    {name:"motorola g5"},{$set:{name:"g4"}}
)
console.log(result);
}

upadteData();