'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let products = [
      {id:1,name:'Televisor 42"',price:2000000, description:'Televisor led de 42" LG', category_id:1},
      {id:2,name:'Lavadora"',price:1800000, description:'Lavadora de 16 kg Mabe',category_id:1},
      {id:3,name:'Jean levis',price:410000, description:'Pantalon jean levis',category_id:2},
      {id:4,name:'Olla arrocera',price:410000, description:'Olla arrocera',category_id:3},
      
    ]

    await queryInterface.bulkInsert('products', products, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
