//run perticular file for mongo crude---ex --> nodemon delete.js

const dbconnect=require("./Mongodb")


const deleteData=async ()=>{
    let data=await dbconnect()
    // let result=await data.deleteMany({name:"redmi"})   //--->delete many occurance
    let result=await data.deleteOne({name:"nji"})
    console.log(result)
}

deleteData()