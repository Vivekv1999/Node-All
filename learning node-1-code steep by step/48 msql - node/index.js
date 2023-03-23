const mysql=require('mysql')

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    passsword:"",
    database:"school"
})

//only for check database is conected or not 
con.connect((err)=>{
    if(err){
        console.log(err,"error occured");
    }
    else{
        console.warn("connceted")
    }
})

con.query("select * from student",(err,result)=>{
    console.log("result",result);
})