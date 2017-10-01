var http = require("https");
var fs = require('fs');
var path = require('path');
var options = {
  "method": "GET",
  "hostname": "en.wikipedia.org",
  "port": 443,
  "path": "/w/api.php?action=parse&section=0&prop=text&format=json&page=topic",
  "method": 'GET',
  "headers": {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength("")
  }
};

var Content = '';
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    var textObj = JSON.parse(body);
     Content = textObj.parse.text['*'];
    repeatedWordCount(Content, 'topik',true);
  });
});

req.write("{}");
req.end();

function repeatedWordCount(Content,  word, showFullCount){

  var count = 0;
  var repeatedCount = 0;
  var contentWithOutSymbols = Content.toString().replace(/[▼><="/:;,]/g, '');
  var words = contentWithOutSymbols.split(' ');

  for( i= 0; i < words.length; i++){
     if(words[i] !== ''){
        count++;
        if(words[i].toUpperCase().indexOf(word.toUpperCase())> -1)
        {
          repeatedCount++;
        }
     }
    
  }
  if(showFullCount)
   process.stdout.write ("total word count : " + repeatedCount + "\n");

   process.stdout.write (word+ " repeated count : " + repeatedCount);
}
