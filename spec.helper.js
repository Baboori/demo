var should = require('should');
var expect = require('chai').expect;
var helper = require('./helper');

describe('helper method', function () {

    //Instead of mock the data I am using customerData.json data to demonstrate testing concepts
   var data = [{
        "id": 1, "first_name": "Jeanette",
        "last_name": "Penddreth",  "email": "jpenddreth0@census.gov",
        "gender": "Female"
    },
    {
        "id": 2,   "first_name": "Giavani",
        "last_name": "Frediani",  "email": "gfrediani1@senate.gov",
        "gender": "Male"
    }];

    it('isvalidNumber should retun true when num is 1', function () {

        expect(helper.isValidNumber(1)).to.equal(true);
    });

    it('isvalidNumber should retun true when num is -1', function () {

        expect(helper.isValidNumber(-1)).to.equal(true);
    });

    it('isvalidNumber should retun true when num is decimal 10.78', function () {

        expect(helper.isValidNumber(10.78)).to.equal(true);
    });

    it('isvalidNumber should retun false when num is empty', function () {

        expect(helper.isValidNumber()).to.equal(false);
    });

    it('isvalidNumber should retun false when num is string', function () {

        expect(helper.isValidNumber('john')).to.equal(false);
    });

    it('isvalidNumber should retun false when num is symbol', function () {

        expect(helper.isValidNumber('&(')).to.equal(false);
    });


    it('findBykey should retun null  if key is null', function () {

        expect(helper.findBykey(null, 1, data)).to.equal(null);
    });

     it('findBykey should retun null  if keys are null', function () {

        expect(helper.findBykey(null, null, data)).to.equal(null);
    });
  

});