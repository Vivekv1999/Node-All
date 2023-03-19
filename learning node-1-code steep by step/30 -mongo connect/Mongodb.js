const { MongoClient } = require('mongodb');
// const  MongoClient  = require('mongodb').MongoClient   //--both line are same

const url = "mongodb://0.0.0.0:27017"
const client = new MongoClient(url)

const database = "e-commerce"

async function dbconnect() {
    let result = await client.connect()
    db = result.db(database)
    return db.collection('products')

}

module.exports= dbconnect