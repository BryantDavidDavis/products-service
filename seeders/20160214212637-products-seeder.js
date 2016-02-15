'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('products', [
      {
        description: "Humbolt Fog Cheese from my farm",
        quantity: 2,
        quantity_counter: 'kg',
        price: 1.5,
        currency: "USD",
        condition: "no pickup on Sunday",
        latitude: 40.745006,
        longitude: -123.869509,
        subcategory_id: 17,
        vendor_id: 1,
        created_at: '2016-02-14 16:59:11'
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('products', null, {});
  }
};
