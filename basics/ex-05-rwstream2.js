var fs = require("fs");
var data = 'data input data input data';

var writerStream = fs.createWriteStream('ex-05-output.txt');

writerStream.write(data,'UTF8');
writerStream.end();
// ------------
writerStream.on('finish', function() { console.log("Write completed."); });
writerStream.on('error', function(err){ console.log(err.stack); });
// ------------

console.log("Program Ended");