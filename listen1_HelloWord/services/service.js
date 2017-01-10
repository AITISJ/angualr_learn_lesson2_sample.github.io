const http = require('http');
const fs = require("fs");
const url = require("url");
const path = require("path");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  var pathName = url.parse(req.url).pathname;

  if (pathName == "/") {
    pathName = "/index.html";
  }
  var filePath = __dirname + pathName;
  filePath=filePath.replace('\\services','');

  res.statusCode = 200;
  switch (path.extname(pathName)) {
    case ".html":
      res.setHeader("Content-Type", "text/html");
      break;
    case ".js":
      res.setHeader("Content-Type", "text/javascript");
      break;
    case ".css":
      res.setHeader("Content-Type", "text/css");
      break;
    case ".jpg":
      res.setHeader("Content-Type", "image/jpeg");
      break;
  }
  fs.readFile(filePath, function (err, data) {
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});