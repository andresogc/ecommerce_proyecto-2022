'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let orders = [
      {id:1,customer_id:2},
      {id:2,customer_id:2},
      {id:3,customer_id:3},
      {id:4,customer_id:5},
    ];
    await queryInterface.bulkInsert('orders',orders, {});
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
