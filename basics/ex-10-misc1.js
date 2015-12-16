console.log( __filename );
console.log( __dirname );

//------------

function printHello(){ console.log( "Hello, World!"); }
setTimeout(printHello, 2000);    // call after 2 seconds
//setInterval(printHello, 2000); // repeat

var t = setTimeout(printHello, 2000);
clearTimeout(t); //stop the timer, not executed

//------------

console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);
console.time("Getting data");
// Do some processing here...
console.timeEnd('Getting data');
console.info("Program Ended")
