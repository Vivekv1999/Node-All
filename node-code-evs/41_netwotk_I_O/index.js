const https = require("node:https")


const MAX_CALLS = 9   //you can increase size it all will take approx same time
const start = Date.now()
for (let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.com", (res) => {
        res.on("data", () => { })
        res.on("end", () => {
            console.log(`Request: ${i + 1} `, Date.now() - start);
        })
    })
    .end()
}


//it do not use thred pool 
//not depending on cpu cores