# demo
Node js demo application

# Requirements
* Node
* Express
* Mocha
* Chai

# Setup
Down load application from github.

run
#  npm install
Mocha need to install global level

# npm install -g mocha

Start local server 

# node customer.service.js

application run at http://127.0.0.1:3005/

Port number can be changed at 

var server = app.listen(3005, function () {
    console.log('Server running at http://127.0.0.1:3005/');
});

Test scripts created with Mocha and Chai

To run test script

# > mocha spec.*.js

RESTFul API calling

Examples: 

Customer details by id
http://127.0.0.1:3005/customer/id/2

Customer list
http://127.0.0.1:3005/customer/list/

Customer details by firstName or lastName

http://127.0.0.1:3005/customer/name/Jeanette/Penddreth


consume APIs code written in callingService.js

var fs = require('fs');
var path = require('path');
var options = {
  "method": "GET",
  "hostname": "127.0.0.1",
  "port": 3005,
  "path": "/customer/list",
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

# node callingService.js







