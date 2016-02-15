var express = require('express');
var db = require('../models/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	db['product'].findAll({
    attributes: [
	    'id', 
	    'description', 
	    'vendor_id', 
	    'quantity', 
	    'quantity_counter', 
	    'price', 
	    'currency', 
	    'condition', 
	    'created_at'
    ],
    include: [{
        model: db['subcategory'],
        attributes: ['name']
    }]
}).then(function(products) {
  		res.json(products);
  	});
});

router.get('/:subcategory', function(req, res, next) {
	
	db['product'].findAll({
    attributes: [
	    'id', 
	    'description', 
	    'vendor_id', 
	    'quantity', 
	    'quantity_counter', 
	    'price', 
	    'currency', 
	    'condition', 
	    'created_at'
    ],
    include: [{
        model: db['subcategory'],
        attributes: ['name'],
        where: {name: req.params.subcategory}
    }]
}).then(function(products) {
  		res.json(products);
  	});
});

module.exports = router;
