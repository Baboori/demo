var _ = require('lodash');
var fileAcess = require('../repositoy/fileAccess');
var config = require('../config');
var helper = require('../helper');
module.exports = function (app) {

    /* Create */

    app.get('/customer/name/:firstName/:lastName', function (req, res) {
        
         var data = fileAcess.readFsSync(config.customerDataFileName );
         for(var i =0; i<data.length; i++){
             if(data[i] && data[i].first_name === req.params.firstName || data[i].last_name === req.params.lastName )
             return  res.json(data[i]);
         }
    });

      app.get('/customer/id/:id', function (req, res) {
         var customerId = 0;
        
         if(helper.isValidNumber(req.params.id))
         {
             customerId= parseInt(req.params.id);
         }
         else{
            res.json("Not a valid customer id, please pass number");
         }
         var data = fileAcess.readFsSync(config.customerDataFileName );
         for(var i =0; i<data.length; i++){
             if(data[i] && data[i].id ==customerId )
             return  res.json(data[i]);
         }
    });

    app.get('/customer/list', function (req, res) {
       var data = fileAcess.readFsSync(config.customerDataFileName );
        res.json(data)

    });

};
