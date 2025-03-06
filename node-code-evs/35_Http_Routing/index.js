const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
  //req.method GET,POST,PUT,PATCH,.....
  //==>!important  --->nichenu Download valu
  if (req.url === "/") {
    res.writeHead(200); ///if---at hete --we change contenttyoe --plan/text -->then file is downloadin broweser /and file not hsoe in broser while downloaded file can see
    res.end("home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(
      JSON.stringify({
        firseName: "bruce",
        lastName: "wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
});

server.listen(3000, () => {
  console.log("server is running of on port 3000");
});
