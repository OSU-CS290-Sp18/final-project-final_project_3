var http = require("http");
var fs = require("fs");

var node= http.createServer(server);
var html = fs.readFileSync('public/index.html','utf8');
var css = fs.readFileSync('public/style.css','utf8');
var js = fs.readFileSync('public/index.js','utf8');
var gao404 = fs.readFileSync('public/404.html','utf8');
var contect = fs.readFileSync('public/contectPage.html','utf8');

function server(req,res){
  console.log("== Request Received");
  console.log("  -- method:", req.method);
  console.log("  -- url:", req.url);

  if(req.url==='/index.html'){
    res.write(html);
    res.statisCode=200;
  }

  else if(req.url=='/contectPage.html'){
    res.write(contect);
    res.statisCode=200;
  }

  else if(req.url==='/'){
    res.write(html);
    res.statisCode=200;
  }
  else if(req.url==='/style.css'){
    res.write(css);
    res.statisCode=200;
  }
  else if(req.url==='/index.js'){
    res.write(js);
    res.statisCode=200;
  }
  else{
    res.write(gao404);
    res.statisCode=404;
  }
  res.end();
}

node.listen(3000, function () {
  console.log("== Server is listening on port 3000");
});
