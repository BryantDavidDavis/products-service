// var express = require('express');
// var Product = require('../models/Product');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   //here we want to get a list of all of the products in the db
//   //to do this we need to perform a sql query that will retrieve all the product data
//   //then that data needs to be converted into product models
//   //then json serialized and returned
//   var product = new Product(1, 2, 'vegetable', 'endive');
//   res.json(product);
// });

// module.exports = router;
var express = require('express');
var db = require('../models/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	db['product'].findAll({
    attributes: ['id', 'description', 'vendor_id', 'quantity', 'quantity_counter', 'price', 'currency', 'condition', 'created_at'],
    include: [{
        model: db['subcategory'],
        attributes: ['name']
    }]
}).then(function(products) {
  		res.json(products);
  	});
});

module.exports = router;
