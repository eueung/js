var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('ex-03'));
//-----------------------------------------------
app.get('/index-post', function (req, res) {
   res.sendFile( __dirname + "/ex-03/" + "index-post.html" );
})
//-----------------------------------------------
app.post('/process_post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
//-----------------------------------------------
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
//-----------------------------------------------