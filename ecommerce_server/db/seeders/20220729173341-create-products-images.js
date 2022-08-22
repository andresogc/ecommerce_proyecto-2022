'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let productsImages = [
      {id: 1,product_id:1,image_id:1},
      {id: 2,product_id:2,image_id:2},
      {id: 3,product_id:2,image_id:3},
      {id: 4,product_id:3,image_id:4},
      {id: 5,product_id:4,image_id:5},
      {id: 6,product_id:4,image_id:6},
    ];
    await queryInterface.bulkInsert('products_images', productsImages, {});
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
