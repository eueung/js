var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
//------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//------------------
function saveJson (filename,filecontent) {
  fs.writeFile(filename, filecontent,  function(err) {
     if (err) { return console.error(err); }
  });
}
//------------------
app.post('/addUser', function (req, res) {
   fs.readFile( __dirname + "/" + "ex-06-users.json", 'utf8', function (err, data) {
       data = JSON.parse( data ); //console.log(req.body);

       data["user" + req.body.id] = {}
       data["user" + req.body.id].name = req.body.name
       data["user" + req.body.id].password = req.body.password
       data["user" + req.body.id].profession = req.body.profession
       data["user" + req.body.id].id = +req.body.id
       console.log( data );
       res.end( JSON.stringify(data));
       saveJson( __dirname + "/" + "ex-06-users.json", JSON.stringify(data) );
   });
});
//------------------
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
//------------------
