const mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "school"
})


con.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("conncetd to mysql");
    }
})

module.exports = con