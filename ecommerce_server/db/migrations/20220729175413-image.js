'use strict';

const {IMAGE_TABLE} = require('../models/image.model');


const {DataTypes} = require('sequelize');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(IMAGE_TABLE,{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
      uri:{
          allowNull:false,
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(IMAGE_TABLE);
  }
};

