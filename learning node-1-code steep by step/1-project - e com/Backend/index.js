const express = require("express")
require('./Db/config')
const User = require('./Db/User')
const cors=require("cors")


const app = express()
app.use(express.json())
app.use(cors())

app.post("/Register", async (req, res) => {
    const userdata = new User(req.body)
    const result = await userdata.save()
    res.send(result)
})


app.listen(4000)