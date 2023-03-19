const express = require('express')
const path = require('path')
const reqfilter = require('./Middleware')

const app = express()
const route = express.Router();
route.use(reqfilter)


// app.use(reqfilter)

app.get("/", (req, res) => {
    res.send("welcoe to home page")
})
app.get("/user", reqfilter, (req, res) => {    //use in param like this -->localhost:4000/user?age=52 or ?age=15
    res.send("welcoe to user page")
})

route.get("/about", (req, res) => {
    res.send("welcoe to about page")
})

app.use("/", route)


app.listen(4000)