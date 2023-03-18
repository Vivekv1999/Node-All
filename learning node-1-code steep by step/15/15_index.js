const express = require('express')
const app = express()


app.get("/", (req, res) => {
    console.log("data from browser param ==>", req.query.name);   //browser url ma name="annundn" name ahiya console ma malse
    //url ma localhost:4000/?name=anyyayy   refresh apata ahiya dat get thase
    res.send(`<h1>home page</h1>
    <a href="/about" >goto about page</a`);
})

app.get("/about", (req, res) => {
    res.send(`
    <input type="text" placeholder="enter text" value="${req.query.name}"/>
    <button>Click me</button>
    <a href="/" >goto home page</a>
    `);
})
app.get("/help", (req, res) => {
    res.send([
        { name: 'nil', email: 'nil@gmail.com' },
        { name: 'Air', email: 'Air@gmail.com' }
    ]
    );
})

app.listen(4000)