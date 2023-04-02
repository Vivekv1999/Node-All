const express = require("express")
const Jwt = require("jsonwebtoken")
const app = express()

app.use(express.json())
const secretKey = "secNWE"

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== "undefined") {
        const tokenMain = bearerHeader.split(" ")[1]
        req.token = tokenMain
        next()
    }
    else {
        res.send({
            result: "please provide a token"
        })
    }
}

app.post("/login", (req, res) => {                                         //$$-->generate token from postman from this api
    const user = {
        id: 1,
        name: "nil",
        email: "nil@gmail.com"
    }
    Jwt.sign({ user }, secretKey, { expiresIn: "5h" }, (err, token) => {
        res.json({ token })
    })
})

app.post("/add", verifyToken, (req, res) => {
    Jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({ result: 'Invalid token' })
        }
        else {
            res.json({
                message: "profile access",
                authData                                                     //token-->first generate token from login api and then  
                                                                            //-->this tokrn detail with ### bearer token     $$$$ in heder save token this way then we get authData
            })
        }
    })
})


app.get("/", (req, res) => {
    res.send("home page")
})

app.listen(4000)