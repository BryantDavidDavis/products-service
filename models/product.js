"use strict";

module.exports = function(sequelize, DataTypes) {
	var Product = sequelize.define("product", {
		quantity: DataTypes.INTEGER,
		quantity_counter: DataTypes.STRING,
		price: DataTypes.DECIMAL,
		currency: DataTypes.STRING,
		condition: DataTypes.STRING,
		latitude: DataTypes.DECIMAL(9,6),
		longitude: DataTypes.DECIMAL(9,6)
	}, 
	{		
		underscored: true,
		classMethods: {
			associate: function(models) {
				Product.belongsTo(models.subcategory, {
					onDelete: "CASCADE"
				});
			}
		}
	});

	return Product;
};