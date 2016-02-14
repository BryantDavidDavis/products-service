var Sequelize = require('sequelize');

var sequelize = new Sequelize('products_service', 'root', '3utnahS', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;