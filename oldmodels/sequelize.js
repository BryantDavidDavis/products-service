var Sequelize = require('sequelize');

var sequelize = new Sequelize('to_do_list', 'root', '3utnahS', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;