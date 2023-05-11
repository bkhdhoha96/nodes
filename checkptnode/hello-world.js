console.log("hello world");
const fs =require("fs")
fs.appendFileSync("welcome.txt","hello Node");

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  