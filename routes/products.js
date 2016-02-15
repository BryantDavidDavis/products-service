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

router.post('/', function(req, res, next) {
	var datetime = new Date();
	var form = req.body;
	db['product'].create({
		description: form.description,
		quantity: form.quantity,
		quantity_counter: form.quantity_counter,
		price: form.price,
		currency: form.currency,
		condition: form.condition,
		latitude: form.latitude,
		longitude: form.longitude,
		subcategory_id: form.subcategory_id,
		vendor_id: form.vendor_id,
		created_at: datetime
	}).then(function(){
		res.json(form);
	})
});

module.exports = router;
