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
  // 
    //var time = now.format("dd/MM/yyyy hh:mm TT");
    //console.log(new Date().toMysqlFormat());
    return queryInterface.bulkInsert('categories', [
      {name: 'coffee'}, 
      {name: 'cotton'},
      {name: 'dairy'},
      {name: 'fish and seafood'},
      {name: 'fruit'},
      {name: 'vegetable'},
      {name: 'grain and feed'},
      {name: 'horticulture'},
      {name: 'forestry'},
      {name: 'livestock'},
      {name: 'oilseeds'},
      {name: 'organic products'},
      {name: 'poutry and eggs'},
      {name: 'processed food products'},
      {name: 'pulse crops'},
      {name: 'seeds for planting'},
      {name: 'sugar'},
      {name: 'tree nuts'},
      {name: 'wine, beer and spirits'}
    ]);

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('categories', null, {});
  }
};