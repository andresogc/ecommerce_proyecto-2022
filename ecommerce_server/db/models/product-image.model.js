const {Model,DataTypes,Sequelize} = require('sequelize');

const {PRODUCT_TABLE} = require('./product.model');
const {IMAGE_TABLE} = require('./image.model');

const PRODUCT_IMAGE_TABLE = 'products_images';

const ProductImageSchema = {
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
}

class ProductImage extends Model{
    static associate(models){
        
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:PRODUCT_IMAGE_TABLE,
            modelName:'ProductImage',
            timestamps:false
        }
    }
}

module.exports = {PRODUCT_IMAGE_TABLE,ProductImageSchema,ProductImage}