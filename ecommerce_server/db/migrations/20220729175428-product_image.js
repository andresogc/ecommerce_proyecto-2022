'use strict';

const {PRODUCT_IMAGE_TABLE} = require('../models/product-image.model');
const {PRODUCT_TABLE} = require('../models/product.model');
const {IMAGE_TABLE} = require('../models/image.model');

const {DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable(PRODUCT_IMAGE_TABLE,{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
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
      imageId: {
        field:'image_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:IMAGE_TABLE,
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
    await queryInterface.dropTable(PRODUCT_IMAGE_TABLE);
  }
};
