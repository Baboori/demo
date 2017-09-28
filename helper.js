'use strict'

var exports = module.exports = {};

exports.isValidNumber = function (num) {
    if (num && Number.isInteger(parseInt(num)))
        return true;
    else
        return false;
}

exports.findBykey = function (key, value, data) {

    if(data) return null;
    if(key) return null;
    if(value) return null;
    for (var i = 0; i < data.length; i++) {
        if (data[i] && data[i][key] == value)
            return data[i];
    }
}