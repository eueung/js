var fs = require("fs");

var data = fs.readFileSync('ex-02-input.txt');
console.log(data.toString());

console.log("Program Ended");