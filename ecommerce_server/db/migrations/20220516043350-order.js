'use strict';

const {ORDER_TABLE} = require('../models/order.model');
const {CUSTOMER_TABLE} = require('../models/customer.model');

const {DataTypes} = require('sequelize');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE,{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    customerId: {
        field:'customer_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:CUSTOMER_TABLE,
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    createdAt:{
        allowNull:true,
        type:DataTypes.DATE,
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
    await queryInterface.dropTable(ORDER_TABLE);
  }
};

