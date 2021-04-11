'use strict';

var fs = require('fs'),
    http = require('http'),
    path = require('path');

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({
  strict: false
}));
var oasTools = require('oas-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.PORT || 8080;

const digits = require("./digits.js");
const transformToSegments = require("./digitMerger.js");


var spec = fs.readFileSync(path.join(__dirname, '/api/oas-doc.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);

var options_object = {
  controllers: path.join(__dirname, './controllers'),
  loglevel: 'info',
  strict: false,
  router: true,
  validator: true
};

oasTools.configure(options_object);

oasTools.initialize(oasDoc, app, function() {
  http.createServer(app).listen(serverPort, function() {
    console.log("App running at http://localhost:" + serverPort);
    console.log("________________________________________________________________");
    if (options_object.docs !== false) {
      console.log('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
      console.log("________________________________________________________________");
    }
  });
});

app.use(express.static("public")); //para el script y el css

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get('/info', function(req, res) {
  res.send({
    info: "This API was generated using oas-generator!",
    name: oasDoc.info.title
  });
});

app.get("/segments", (request, response) => {
  const t = request.query.t;
  const n = request.query.n;
  //console.log(transformToSegments(t,n));
  response.json(transformToSegments(t,n));
});

//el post que piden en el ejercicio en cuestion
app.post("/segments",  (request, response) => {
  var list = []
  //console.log(request.body);
  for(var i in request.body){
    var t = request.body[i].t;
    var n = request.body[i].n;
    //hay que pasar n y t a String porque si no falla despues en la expresion regular
    t = t.toString();
    n = n.toString();
    console.log(t);
    console.log(n);
    console.log(transformToSegments(t,n));
    list.push(transformToSegments(t,n));
  }
  response.json(list);
});
