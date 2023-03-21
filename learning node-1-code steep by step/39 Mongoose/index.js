const mongoose=require('mongoose')


const main=async ()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")  ////**imporant joylev */
    const productSchema=new mongoose.Schema({
        name:String,
        price:Number
    })
    

    const productModal=mongoose.model('products',productSchema)
    let data= new productModal({name:'asus zen',price:5050})
    let result=await data.save()
    console.log(result);

} 


main ()