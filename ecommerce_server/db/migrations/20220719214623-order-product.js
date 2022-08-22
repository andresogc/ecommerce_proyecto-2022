'use strict';

const {ORDER_PRODUCT_TABLE} = require('../models/order-product.model');
const {PRODUCT_TABLE} = require('../models/product.model');
const {ORDER_TABLE} = require('../models/order.model');


const {DataTypes} = require('sequelize');



module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable(ORDER_PRODUCT_TABLE,{
        id:{
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
          type:DataTypes.INTEGER
      },
      
      amount:{
          allowNull:false,
          type:DataTypes.INTEGER
      },
      orderId: {
          field:'order_id',
          allowNull:false,
          type:DataTypes.INTEGER,
          references:{
              model:ORDER_TABLE,
              key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      },
      productId: {
          field:'product_id',
          allowNull:false,
          type:DataTypes.INTEGER,
          references:{
              model:PRODUCT_TABLE,
              key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
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
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};

