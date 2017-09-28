var _ = require('lodash');
var fileAcess = require('../repositoy/fileAccess');
module.exports = function(app) {

    /* Create */
  
     app.get('/customer/name/:firstName/:lastName', function (req, res) {

         res.json({fullName: req.params.firstName + req.params.lastName});
         
    });

    app.get('/customer/list', function(req, res) {
      var customerData = fileAcess.readFile('amar');
     console.log('customer list called');
      res.json(customerData)
      
    });

};
