"use strict";

module.exports = function(sequelize, DataTypes) {
	var Subcategory = sequelize.define("subcategory", {
		name: DataTypes.STRING,
	}, {
		underscored: true,
		classMethods: {
			associate: function(models) {
				Subcategory.belongsTo(models.category, {
					onDelete: "CASCADE"
				});
				Subcategory.hasMany(models.product, {
					onDelete: "CASCADE"
				});
			}
		}	
	});

	return Subcategory;
};