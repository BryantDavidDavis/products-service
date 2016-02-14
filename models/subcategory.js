"use strict";

module.exports = function(sequelize, DataTypes) {
	var Subcategory = sequelize.define("subcategory", {
		name: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				Subcategory.belongsTo(models.category, {
					onDelete: "CASCADE",
					foreignKey: {
						allowNull: false
					}
				});
			}
		}	
	});

	return Subcategory;
};