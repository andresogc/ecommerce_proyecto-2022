'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let categories = [
     { id:1, name:'Tegnología', image:'http://images.com/img1.png'},
     { id:2,name:'Ropa', image:'http://images.com/img2.png'},
     { id:3,name:'Hogar', image:'http://images.com/img3.png'},
    ];

    await queryInterface.bulkInsert('categories', categories, {});
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
