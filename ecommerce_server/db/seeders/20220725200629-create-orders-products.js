'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let ordersProducts = [
      {id: 1,amount:1,order_id:1,product_id:1},
      {id: 2,amount:2,order_id:1,product_id:2},
      {id: 3,amount:2,order_id:2,product_id:3},
      {id: 4,amount:3,order_id:3,product_id:4},
      {id: 5,amount:2,order_id:4,product_id:2},
    ];
    await queryInterface.bulkInsert('orders_products', ordersProducts, {});
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
