const mongoose=require("mongoose")
// mongoose.connect("mongodb://localhost:27017/todoapp")
mongoose.connect("mongodb://0.0.0.0:27017/todoapp")
.then(()=>{
    console.log("connect to mongo sucessfully");
}).catch((error)=>{
    console.error(error)
})