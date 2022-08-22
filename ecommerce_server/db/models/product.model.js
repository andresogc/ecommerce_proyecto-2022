const {Model,DataTypes,Sequelize} = require('sequelize');

const {CATEGORY_TABLE} = require('./category.model')

const PRODUCT_TABLE = 'products';

const ProductSchema = {
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
        onDelete: 'CASCADE',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:CATEGORY_TABLE,
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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

}

class Product extends Model{
    static associate(models){
       this.belongsTo(models.Category,{ as:'category',onDelete: 'CASCADE',hooks: true });
       this.belongsToMany(models.Image,{
        as:'files',
        through:models.ProductImage,
        foreignKey:'productId',
        otherKey:'imageId',
        onDelete: 'cascade',
   });
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:PRODUCT_TABLE,
            modelName:'Product',
            timestamps:false
        }
    }
}

module.exports = {PRODUCT_TABLE,ProductSchema,Product} 