const dbconnect=require('./Mongodb')

//-->1st method
// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

//--->second way to handle promise
const main = async () => {
    let data = await dbconnect()
    data = await data.find().toArray()
    console.log(data);
}

main()