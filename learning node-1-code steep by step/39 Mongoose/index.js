const mongoose = require('mongoose')


// const main=async ()=>{
//     await mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")  ////**imporant joylev */
// } 

// const productModal=mongoose.model('products',productSchema)
// let data= new productModal({name:'asus zen',price:5050})
// let result=await data.save()
// console.log(result);

// main ()


mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")  ////**imporant joylev */

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    beand: String,
    category: String
})

const savedataDb = async () => {
    const product = mongoose.model('products', productSchema)
    let data = new product({
        name: 'Lg',
        price: 5252,
        category: 'mobile'
    })
    let result = await data.save()
    console.log(result);
}

const updateDb = async () => {
    const product = mongoose.model('products', productSchema)
    let data = await product.updateOne(
        { name: "note 11" },
        {
            $set: {
                name: "realme 7",
                price: 4555,
                category: 'mobile'
            }
        }
    )
}

const deleteDb = async () => {
    const product = mongoose.model('products', productSchema)
    const data= await product.deleteOne({name:"asus zen"})
    console.log(data);

}
const findDb = async () => {
    const product = mongoose.model('products', productSchema)
    const data= await product.find({name:"asus zen"})    //->badha jetla hase badha serch ma dekhase
    console.log(data);
}

// savedataDb()
// updateDb()
// deleteDb()
findDb()