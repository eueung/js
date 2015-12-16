var fs = require("fs");

var readerStream = fs.createReadStream('ex-05-input.txt');
var writerStream = fs.createWriteStream('ex-05-output-2.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");