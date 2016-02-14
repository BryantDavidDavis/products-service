var express = require('express');
var db = require('../models/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	db['category'].findAll().then(function(categories) {
  		res.json(categories);
  	});
});

module.exports = router;
