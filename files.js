//File System to Create, Read, Delete, Update
const fs = require("fs");

// reading files(Async) - it has two arguments
//first - location of file to read
//second - callback function after task done.
/*
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  //   console.log(data);//it shows a buffer data
  console.log(data.toString());
});

console.log("last line");
*/

//Writing files
/*
fs.writeFile("./docs/blog1.txt", "hello, stars", () => {
  console.log("written");
});

//creating and written the text inside it
fs.writeFile("./docs/blog2.txt", "hello, ninjas", () => {
  console.log("written again");
});
*/

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //   console.log("folder already exist");
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
