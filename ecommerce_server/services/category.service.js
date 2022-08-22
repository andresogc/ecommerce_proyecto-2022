
const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');


const find = async ()=>{
   /*  const newCategory = await models.Category.create();
    return newCategory;     */
    const categories = await models.Category.findAll();
    return categories;
}

const findOne = async (id)=>{
    const category = await models.Category.findByPk(id,{
        include:['products']
    });
    return category;
}

const create = async (data)=>{
    const newCategory = await models.Category.create(data);
    return newCategory;
}

const update  = async (id, changes)=>{
    
}

const destroy = async (id)=>{
   
}



module.exports = { find ,findOne,create,update,destroy};