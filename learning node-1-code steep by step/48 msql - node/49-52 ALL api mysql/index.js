const express = require('express')
const con = require('./config')

const app = express()


app.get("/", (req, res) => {
    con.query("select * from student", (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
})

//static data add-post 
// app.post('/', (req, res) => {
//     const data = { studentname: "yaan", age: '32',nn:'oo'}     //table ma je field nu name hoy tej lakavu -- else request send thya j karse ostman ma error pn nay ave
//     con.query('INSERT INTO student SET ?', data, (error, result, fields) => {
//         if (error) {
//            console.log(error)
//         } else {
//             res.send(result)
//         }

//     })
// })

app.use(express.json())

//data add from postman
app.post('/', async (req, res) => {
    const data= await req.body
    con.query('INSERT INTO student SET ?', data, (error, result, fields) => {
        if (error) {
           console.log(error)
        } else {
            res.send(result)
        }

    })
})

//staticaly change data
// app.put("/",(req,res)=>{
//     const data=["ronak",27,3]
//     con.query("UPDATE student SET studentname =?,age =? where studentId =?", data,(error,result,fields)=>{
//         if(error){
//             console.log(error);
//         }else{
//             res.send(result)
//         }
//     })
// })

//Put -- data update through postman
app.put("/:studentId",(req,res)=>{
    const data=[req.body.studentname,req.body.age,req.params.studentId]
    con.query("UPDATE student SET studentname =?,age =? where studentId =?", data,(error,result,fields)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result)
        }
    })
})

app.delete("/:studentID",(req,res)=>{
    console.log(req.params.studentID);
    con.query("DELETE FROM student where studentID = ?", +req.params.studentID,(error,result)=>{
        if(error) {
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
        
})

app.listen(4000)
