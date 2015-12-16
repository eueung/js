process.on('exit', function(code) {
  // Following code will never execute.
  setTimeout(function() { console.log("This will not run"); }, 0);
  console.log('About to exit with code:', code);
});
console.log("Program Started");

//------------
process.stdout.write("Hello World!" + "\n");
// Reading passed parameter
process.argv.forEach(function(val, index, array) { console.log(index + ': ' + val); });

//------------
console.log(process.execPath);
console.log(process.platform);
console.log('Current directory: ' + process.cwd());
console.log('Current version: ' + process.version);
console.log(process.memoryUsage());
//------------