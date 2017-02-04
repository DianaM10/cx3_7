var express = require('express');
var app = express();
var path = require('path');
var planets = [{name: "Mars", size: 2093}, {name: "Earth", size: 3098}];

app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
})

//new
app.get('/planets/new', function(req, res){
    res.send("NEW planet routes")
})
//create
app.post('/planets', function(req, res){
  res.send("CREATE planet route")
})
//show
app.get('/planets/:id', function(req, res) {
  res.json(planets[req.params.id]);
})
//edit
app.get('/planets/:id/edit', function(req, res) {
  res.send("EDIT planet route");
})
//update
app.put('/planets/:id', function(req, res) {
  res.send("UPDATE planets route");
})
//delete
app.delete('/planets/:id', function( req, res){
  res.send("DELETE planet route, DESTROY!!");
})
app.listen('3000', function(){
console.log("party at port 3000")
})

