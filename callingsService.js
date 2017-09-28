var http = require("http");
var fs = require('fs');
var path = require('path');
var options = {
  "method": "GET",
  "hostname": "127.0.0.1",
  "port": 3005,
  "path": "/customer/name/amar/goud",
  "method": 'GET'
};


var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("{}");
req.end();
