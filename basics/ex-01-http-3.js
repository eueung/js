var http = require('http');

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];

  request.on('error', function(err) { console.error(err);})
    .on('data', function(chunk) { body.push(chunk);})
    .on('end', function() {
        //body = Buffer.concat(body).toString();
        // respond to this request.
        response.on('error', function(err) { console.error(err); });
        response.writeHead(200, {'Content-Type': 'text/html'});  
        response.end('<html><body><h1>Hello, World!</h1></body></html>');
    });
}).listen(8080); 