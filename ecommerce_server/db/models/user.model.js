const {Model,DataTypes,Sequelize} = require('sequelize');
const USER_TABLE = 'users';

const UserSchema = {
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
    },
    role:{
        allowNull:false,
        type:DataTypes.STRING,
        defaultValue:'customer'
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },
    recoveryToken:{
        field:'recovery_token',
        allowNull:true,
        type:DataTypes.STRING
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

class User extends Model{
    static associate(models){
        this.hasOne(models.Customer,{
            as:'customer',
            foreignKey:'userId',
            onDelete: 'cascade',
        })
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}

module.exports = {USER_TABLE,UserSchema,User}