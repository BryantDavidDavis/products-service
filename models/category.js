"use strict";

module.exports = function(sequelize, DataTypes) {
	var Category = sequelize.define("category", {
		name: DataTypes.STRING
	});

	return Category;
};