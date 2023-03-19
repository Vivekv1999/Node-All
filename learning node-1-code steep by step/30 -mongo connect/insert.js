const dbconnect=require('./Mongodb')

const insertt= async ()=>{
    const db=await dbconnect()
    // const result=await db.insertOne(        //-->1 field insert karava
    const result=await db.insertMany(          //-->multipla filed insert karva
        [
            {name:'air d1',brand:'asd',price:2525},
            {name:'nux',brand:'zeb',price:5245},
            {name:'redmi',brand:'mi',price:4252},
        ]
    )
    console.log(result);
    
    if(result.acknowledged===true){
        console.log("data inserted");
    }
}


insertt()

