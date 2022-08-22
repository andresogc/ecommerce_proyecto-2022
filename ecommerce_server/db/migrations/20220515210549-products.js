'use strict';

const {CATEGORY_TABLE} = require('../models/category.model');
const {PRODUCT_TABLE} = require('../models/product.model');
const {DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE,{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING,
            unique:true
        },
        image:{
            allowNull:true,
            type:DataTypes.STRING,
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
    
    await queryInterface.createTable(PRODUCT_TABLE,{
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
        price:{
            allowNull:true,
            type:DataTypes.INTEGER,
        },
        description:{
            allowNull:false,
            type:DataTypes.TEXT,
        },
    
        categoryId: {
            field:'category_id',
            allowNull:false,
            type:DataTypes.INTEGER,
            references:{
                model:CATEGORY_TABLE,
                key:'id'
            },
            onUpdate: 'CASCADE',
            //onDelete: 'SET NULL'
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
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);

  }
};
