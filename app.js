import http from "http";
import fs from "fs";

const server = http.createServer(function (req, rep) {
  try {
    if (req.method === "GET") {
      const page = fs.readFileSync("./index.html");
      rep.writeHead(200, { "Content-Type": "text/html; charset=UTF-8;" });
      rep.write(page);
      rep.end();
    }
    if (req.url.includes("./app.js")) {
      const page = fs.readFileSync("./app.js");
      rep.writeHead(200, { "Content-Type": "text/javascript; charset=UTF-8;" });
      rep.writable(page);
      rep.end();
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(2080, function (error) {
  console.log("server is runnig at http://localhost:2080/");
  if (error) {
    throw error;
  }
});
