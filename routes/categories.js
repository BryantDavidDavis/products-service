var express = require('express');
var Category = require('../models/Category');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Category.findAll().then(function(categories) {
  	res.json(categories);
	});
  
  //res.json(product);
});

module.exports = router;
