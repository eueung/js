var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
//--------------------------
app.use(express.static('ex-04/public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: 'ex-04/public/tmp/'}));
var upload = multer({ dest: 'ex-04/tmp/'});
//--------------------------
app.get('/index-upload', function (req, res) { res.sendFile( __dirname + "/ex-04/public/" + "index-upload.html" ); });
//--------------------------
app.post('/file_upload', upload.single('file'), function (req, res) {
   console.log(req.file.originalname);
   console.log(req.file.path);
   console.log(req.file.mimetype); 

   var file = __dirname + "/ex-04/result/" + req.file.originalname;
   fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
        if( err ){ console.log( err ); }
        else { response = { message:'File uploaded successfully', filename:req.file.originalname }; }
        console.log( response );
        res.end( JSON.stringify( response ) );
      });
   });
});
//--------------------------
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});
//--------------------------
