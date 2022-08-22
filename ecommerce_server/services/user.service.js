
const boom = require('@hapi/boom');
const { urlencoded } = require('express');
const bcrypt = require('bcrypt');

const getConnection = require('../libs/postgres');

const {models} = require('../libs/sequelize');
   


    const find = async ()=>{
        //const client = await getConnection();
        //const rta = await client.query('SELECT * FROM tasks');
        const rta = await models.User.findAll({
            include:['customer']
        });
        
        return rta;
    }


    const findOne = async (id)=>{
       /*  const product =  products.find(item=>item.id == id);
        if(!product){
            throw boom.notFound('product not found'); //con boom , boom ya sabe que cofigo de error enviar en este caso 404
        }
        return product; */
        const user = await models.User.findByPk(id);
        if(!user){
            throw boom.notFound('user not found'); 
        }
        return user;

    }

    const create = async (data)=>{
        /*  const id = 'da389df8-cf4d-11ec-9d64-0242ac12000' + products.length+1;
         const newProduct = {
             id,
             ...data
         }
         products.push(newProduct);
         return newProduct; */
        const hash = await bcrypt.hash(data.password,7);
        const newUser = await models.User.create({
            ...data,
            password:hash
        });
        delete newUser.dataValues.password
        return newUser;
     }

    const update  = async (id, changes)=>{
     /*    const index = products.findIndex(item=>item.id == id); 
        if(index === -1){
            //throw new Error('Product not found') //sin boom
            throw boom.notFound('product not found'); //con boom , boom ya sabe que cofigo de error enviar en este caso 404
        }
        const product = products[index];
        products[index] =  {
            ...product,
            ...changes
        }
        return products[index]; */
        const user = await findOne(id);
        const rta = await user.update(changes);

        return rta;

    }

    const eliminate = async (id)=>{
       /*  const index = products.findIndex(item=>item.id == id); 
        if(index === -1){
            //throw new Error('Product not found')
            throw boom.notFound('product not found'); //con boom , boom ya sabe que cofigo de error enviar en este caso 404
        }
        products.splice(index,1);
        return {id}; */

        const user = await findOne(id);

        await user.destroy();
        return {id}; 
    }

    const findByEmail = async (email)=>{
        const rta = await models.User.findOne({
            where:{email}
        });
        
        return rta;
    }




module.exports = { find ,findOne,create,update,eliminate,findByEmail};