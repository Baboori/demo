'use strict '
var fs = require('fs');
var path = require('path');
var config = require('../config');


var exports = module.exports = {};

exports.readFile = function (fileName) {
    console.log("reading file");
    fs.readFile(path.join(__dirname, config.dataFilePath), {
        encoding: 'utf-8'
    }, function (err, data) {
        if (err) throw err;
        console.log(data);
        return data;
    });
}

exports.writeFile = function () {
    fs.writeFile('log.txt', 'Hello World!', function (err) {
        if (err) throw err;
        console.log('Writing is done.');
    });
}

