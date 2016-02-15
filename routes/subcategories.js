var express = require('express');
var db = require('../models/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	db['subcategory'].findAll({
    attributes: ['id', 'name'],
    include: [{
        model: db['category'],
        attributes: ['name']
    }]
}).then(function(subcategories) {
  		res.json(subcategories);
  	});
});

module.exports = router;