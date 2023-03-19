module.exports =  (req,res,next)=>{
    console.log("reqfilter");
    if(!req.query.age){ 
        res.send("pleae provide age")   //**if we send this --res,send then we can not set next() */
    }
    else  if(req.query.age<18){ 
        res.send("Yuo can not access this page")   
    }
    else{
        next()
    }
}