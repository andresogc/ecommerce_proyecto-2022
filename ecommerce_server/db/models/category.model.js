const {Model,DataTypes,Sequelize} = require('sequelize');
const CATEGORY_TABLE = 'categories';

const CategorySchema = {
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
    }
}

class Category extends Model{
    static associate(models){
       this.hasMany(models.Product,{
           as:'products',
           foreignKey:'categoryId',
           onDelete: 'CASCADE',
           hooks: true
       })
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:CATEGORY_TABLE,
            modelName:'Category',
            timestamps:false,
            
        }
    }
}

module.exports = {CATEGORY_TABLE,CategorySchema,Category}