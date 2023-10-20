const http = require("http");
const fs = require("fs");
// req - url
// res - object send to the user
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/plain");
  res.write("hello");
});

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.setHeader("content-type", "text/html");
//   fs.readfile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });
server.listen(7892, "localhost", () => {
  console.log("listening for requests on port 7892");
});
