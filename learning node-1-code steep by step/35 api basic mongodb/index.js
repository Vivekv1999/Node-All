const dbconnect=require('./Mongodb')

//-->read data--from mongo
const main = async () => {
    let data = await dbconnect()
    data = await data.find().toArray()
    console.log(data);
}


main()