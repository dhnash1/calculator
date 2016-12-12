var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var answer;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(9999, function(){
  console.log("get funky");
});

app.post('/math', function(req,res){
  console.log('post');
  console.log(req.body);
  var m1 = parseInt(req.body.one);
  var m2 = parseInt(req.body.two);
  var opp = (req.body.math);
  console.log(m1, m2);
    if(opp == "plus"){
      answer = m1 + m2;
    }else if (opp == "minus") {
      answer = m1 - m2;
    }else if (opp == "divide") {
      answer = m1 / m2;
    }else if (opp == "multiply") {
      answer = m1 * m2;
    }
    var returnObj = {gift:answer};
    res.send(returnObj);
});
