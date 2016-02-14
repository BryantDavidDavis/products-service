var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

// model definition
var User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//         username: "john",
//         password: "a_secret"
// 	});
// });