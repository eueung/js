var express = require('express');
var app = express();
//-----------------------------------------
app.use(express.static('ex-03'));
// get '/' langsung
//-----------------------------------------
app.get('/index-get', function (req, res) {
   res.sendFile( __dirname + "/ex-03/" + "index-get.html" );
});
//-----------------------------------------
app.get('/process_get', function (req, res) {
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
//-----------------------------------------
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
//-----------------------------------------