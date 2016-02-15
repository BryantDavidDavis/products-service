'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER
        },
        quantity_counter: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.DECIMAL
        },
        currency: {
          type: Sequelize.STRING
        },
        condition: {
          type: Sequelize.STRING
        },
        latitude: {
          type: Sequelize.FLOAT(10,6)
        },
        longitude: {
          type: Sequelize.FLOAT(10,6)
        },
        subcategory_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "subcategories",
            key: "id"
          }
        },
        vendor_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('products');
  }
};
