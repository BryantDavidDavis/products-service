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
    return queryInterface.bulkInsert('subcategories', [
      {name: 'citrus fruit', category_id: 5}, 
      {name: 'deciduous fruit', category_id: 5}, 
      {name: 'dried fruit', category_id: 5}, 
      {name: 'stone fruit', category_id: 5}, 
      {name: 'barley', category_id: 7}, 
      {name: 'corn', category_id: 7}, 
      {name: 'forage and hay', category_id: 7}, 
      {name: 'grain sorghum', category_id: 7}, 
      {name: 'oats', category_id: 7},
      {name: 'rice', category_id: 7}, 
      {name: 'rye', category_id: 7}, 
      {name: 'wheat', category_id: 7},
      {name: 'soybeans', category_id: 11}, 
      {name: 'other oilseeds', category_id: 11}, 
      {name: 'beef and cattle', category_id: 10}, 
      {name: 'pork and hogs', category_id: 10},
      {name: 'cheese', category_id: 3} 
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('subcategories', null, {});
  }
};
