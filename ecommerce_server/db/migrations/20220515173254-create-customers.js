'use strict';

const {CUSTOMER_TABLE} = require('./../models/customer.model');
const {USER_TABLE} = require('./../models/user.model');
const {DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE,{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    lastName:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'last_name'
    },
    phone:{
        allowNull:true,
        type:DataTypes.STRING
    },
    
    userId: {
        field:'user_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        unique:true,
        references:{
            model:USER_TABLE,
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
