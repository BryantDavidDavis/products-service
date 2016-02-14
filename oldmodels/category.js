var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Category = sequelize.define("category", {
	name: Sequelize.STRING
});

Category.sync({force: true}).then(function () {
  // Table created
  return Category.create({
        name: 'cabbage'
	});
});

module.exports = Category;