'use strict';

const {USER_TABLE} = require('./../models/user.model');
const {DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
      email:{
          allowNull:false,
          type:DataTypes.STRING,
          unique:true
      },
      role:{
          allowNull:false,
          type:DataTypes.STRING,
          defaultValue:'customer'
      },
      password:{
          allowNull:false,
          type:DataTypes.STRING
      },
      recoveryToken:{
        field:'recovery_token',
        allowNull:true,
        type:DataTypes.STRING
      },
      createdAt:{
          allowNull:true,
          type:'TIMESTAMP',
          field:'created_at',
          defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt:{
        allowNull:true,
        type:'TIMESTAMP',
        field:'updated_at',
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);  
  }
};
