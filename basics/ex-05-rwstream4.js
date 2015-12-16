var fs = require("fs");
var zlib = require('zlib');

// ----------------
fs.createReadStream('ex-05-input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('ex-05-input.txt.gz'));
  
console.log("File Compressed.");
// ----------------
// need sync (callback after write gz)

fs.createReadStream('ex-05-input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('ex-05-input-recovered.txt'));
  
console.log("File Decompressed.");
