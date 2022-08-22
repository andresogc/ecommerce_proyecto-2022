const {Model,DataTypes,Sequelize} = require('sequelize');
const IMAGE_TABLE = 'images';

const ImageSchema = {
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
}

class Image extends Model{
    static associate(models){
       this.hasMany(models.Product,{
           as:'products',
           foreignKey:'imageId',
           onDelete: 'CASCADE',
           hooks: true
       })
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:IMAGE_TABLE,
            modelName:'Image',
            timestamps:false,
            
        }
    }
}

module.exports = {IMAGE_TABLE,ImageSchema,Image}