'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let users = [
      {id:1,email:'admin@mail.com',role:'administrator', password:'12345678'},
      {id:2,email:'carlos@mail.com',role:'customer', password:'12345678'},
      {id:3,email:'yasmin@mail.com',role:'customer', password:'12345678'},
      {id:4,email:'lina@mail.com',role:'customer', password:'12345678'},
      {id:5,email:'diana@mail.com',role:'customer', password:'12345678'},
    ]
    let customers = [
      {id:1,name:'administrator',last_name:'store', phone:'22355',user_id:'1'},
      {id:2,name:'carlos',last_name:'amaya', phone:'22355',user_id:'2'},
      {id:3,name:'yasmin',last_name:'rojas', phone:'22355',user_id:'3'},
      {id:4,name:'lina',last_name:'perez', phone:'22355',user_id:'4'},
      {id:5,name:'diana',last_name:'carmona', phone:'22355',user_id:'5'},
    ]

    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('customers', customers, {});
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
