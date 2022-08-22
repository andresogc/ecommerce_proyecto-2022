const {Model,DataTypes,Sequelize} = require('sequelize');

const {ORDER_TABLE} = require('./order.model');
const {PRODUCT_TABLE} = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
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
    
}

class OrderProduct extends Model{
    static associate(models){
        
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:ORDER_PRODUCT_TABLE,
            modelName:'OrderProduct',
            timestamps:false
        }
    }
}

module.exports = {ORDER_PRODUCT_TABLE,OrderProductSchema,OrderProduct}