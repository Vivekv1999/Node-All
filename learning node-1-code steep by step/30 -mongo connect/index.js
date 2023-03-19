const { MongoClient } = require('mongodb');
// const  MongoClient  = require('mongodb').MongoClient   //--both line are same

const url="mongodb://0.0.0.0:27017"     // at here in video--> const url="mongodb://localhost:27017"
                                        //but thi sis wrong eeror occured
                                        //---> MongoServerSelectionError: connect ECONNREFUSED ::1:27017
const client= new MongoClient(url)

// const database='e-commerce'

async function getData(){
    let result= await client.connect()
    let db= result.db('e-commerce')
    let collection=db.collection('products')
    console.log("connet succesully");
    let response= await collection.find({}).toArray()
    console.log(response);
}


getData();
