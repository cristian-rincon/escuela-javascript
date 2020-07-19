const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello, friend\n");
});

server.listen(5000);
console.log("Servidor en la url http://localhost:5000");
