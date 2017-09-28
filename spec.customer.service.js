var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var util = require('util');
var baseUrl = 'http://127.0.0.1:3005/';
var superagent = require('superagent');
describe('customerServer', function () {

    it('should get 200 check - server running', function (done) {
        superagent
            .get(baseUrl)
            .end(function (res) {
                done();
                expect(res.status).to.equal(200);
            })
    })

    it('should get 200 check - customer api accesible', function (done) {
        superagent
            .get(baseUrl + 'customer')
            .end(function (res) {
                done();
                expect(res.status).to.equal(200);
            })
    })

});