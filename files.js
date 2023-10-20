//File System to Create, Read, Delete, Update
const fs = require("fs");

// reading files(Async) - it has two arguments
//first - location of file to read
//second - callback function after task done.
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  //   console.log(data);//it shows a buffer data
  console.log(data.toString());
});

console.log("last line");