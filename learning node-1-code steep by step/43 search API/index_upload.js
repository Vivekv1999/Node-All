const express=require('express')
const multer=require('multer')
require('./config')

const app=express()

const upload=multer({
    storage:multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null,'uploadsFolder')      //file store thay teni ,loaction         
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+".jpg")
        }
    })
}).single('user_file')          //single file 6 ke multi and && --postman ma file ma name naku te ahiya nakahvu


app.post('/upload',upload,(req,res)=>[
    res.send("file uploaded")

])


app.listen(4000)