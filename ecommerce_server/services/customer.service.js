
const boom = require('@hapi/boom');
const { urlencoded } = require('express');
const bcrypt = require('bcrypt');
const getConnection = require('../libs/postgres');

const {models} = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');


    

    const find = async ()=>{
        
        const rta = await models.Customer.findAll({
            include:['user']
        });
        
        return rta;
    }


    const findOne = async (id)=>{
       
        const customer = await models.Customer.findByPk(id);
        if(!customer){
            throw boom.notFound('customer not found'); 
        }
        return customer;

    }

    const create = async (data)=>{
        /**esto ya no es necesario ya qeu con la asociacin puedodecirle a sequlice que cree el usuario de una vez de forma automatica */
        //const newUser = await models.User.create(data.user); 
       /*  const newCustomer = await models.Customer.create({
            ...data,
            userId:newUser.id
        }); */
        //asi incluimos el suaurio y sequlize automaticamente lo crea
        const t = await sequelize.transaction();
        
       
            const hash = await bcrypt.hash(data.user.password,7);
            const newData= {
                ...data,
                user: {
                    ...data.user,
                    password:hash
                }
            }
            const newCustomer = await models.Customer.create(newData,{
                include:['user'],transaction:t
            },{ transaction: t });
           
            await t.commit();
            
            delete newCustomer.dataValues.user.password
            return newCustomer;
      
        
    }


    const update  = async (id, changes)=>{
        const customer = await findOne(id);
        const rta = await customer.update(changes);

        return rta;

    }

    const eliminate = async (id)=>{
        const customer = await findOne(id);

        await customer.destroy();
        return {id}; 
    }


module.exports = { find ,findOne,create,update,eliminate};