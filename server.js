const http = require("http");

// req - url
// res - object send to the user
const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(7892, "localhost", () => {
  console.log("listening for requests on port 7892");
});
