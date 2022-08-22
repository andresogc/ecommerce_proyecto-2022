
const boom = require('@hapi/boom');
const { urlencoded } = require('express');

const getConnection = require('../libs/postgres');

const {models} = require('../libs/sequelize');

   


    const find = async ()=>{
        const rta = await models.Order.findAll();
        
        return rta;
    }


    const findOne = async (id)=>{
        const order = await models.Order.findByPk(id,{
            include:[
                {
                    'association':'customer',
                    include:['user']
                },
                'items'
            ]
        });
        if(!order){
            throw boom.notFound('order not found'); 
        }
        return order;

    }

    const create = async (data)=>{
        const newOrder = await models.Order.create(data)    
        return newOrder;
    }

    const update  = async (id, changes)=>{
        

    }

    const eliminate = async (id)=>{
    
        const order = await findOne(id);

        await order.destroy();
        return {id}; 
    }


    const addItem = async (data)=>{
        const newItem = await models.OrderProduct.create(data)    
        return newItem;
    }

    const findByUser = async (userId)=>{
        const orders = await models.Order.findAll({
            where:{
                '$customer.user.id$':userId
            },
            include:[
                {
                    'association':'customer',
                    include:['user']
                },
                //'items'
            ]
        });
       
        return orders;

    }



module.exports = { find ,findOne,create,update,eliminate,addItem,findByUser};