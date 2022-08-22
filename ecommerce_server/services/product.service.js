
const boom = require('@hapi/boom');
const {Op} = require('sequelize');

//const pool = require('../libs/postgres.pool');

//const sequelize = require('../libs/sequelize');

const {models} = require('../libs/sequelize');


//pool.on('error',(err)=>console.log());

/* var products = [
    {   
        id:'e5d80ee2-cf4c-11ec-9d64-0242ac120002',
        name:'tv',
        price:4000,
        image:'https://www.tienda.com/image1',
    },
    {   
        id:'e5d81176-cf4c-11ec-9d64-0242ac120002',
        name:'radio',
        price:2000,
        image:'https://www.tienda.com/image2',
    },
    {   
        id:'e5d812a2-cf4c-11ec-9d64-0242ac120002',
        name:'lavadora',
        price:3000,
        image:'https://www.tienda.com/image3',
    },
];  */


   

    const find = async (query)=>{
       /*  const query = 'SELECT * FROM tasks';
        //const response =  await pool.query(query);
        //return response.rows;//repuesta con pool sin sequlize

        const [data,metadata] =  await sequelize.query(query);//metadata trae infomracion adicional 

        return data;  */
        const options = {
            include:['category'],
            where:{}
        }

        const {limit,offset} = query;

        if(limit && offset){
            options.limit = limit;
            options.offset = offset;
        }
        const {price_min,price_max} = query;
        if (price_min && price_max) {
            options.where.price = {
                [Op.gte]:price_min,
                [Op.lte]:price_max
            };
        }

        const products = await models.Product.findAll(options);
        return products;

    }


    const findOne = async (id)=>{
       /*  const product =  products.find(item=>item.id == id);
        if(!product){
            throw boom.notFound('product not found'); //con boom , boom ya sabe que cofigo de error enviar en este caso 404
        }
        return product; */
        const product = await models.Product.findByPk(id);
        if(!product){
            throw boom.notFound('product not found'); 
        }
        return product;
    }

    const create = async (data)=>{
       /*  const id = 'da389df8-cf4d-11ec-9d64-0242ac12000' + products.length+1;
        const newProduct = {
            id,
            ...data
        }

        products.push(newProduct);
        return newProduct; */
        console.log('newProduct:',data);
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    
    const update  = async (id, changes)=>{
        /* const index = products.findIndex(item=>item.id == id); 
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
    }

    const destroy = async (id)=>{
       /*  const index = products.findIndex(item=>item.id == id); 
        if(index === -1){
            //throw new Error('Product not found')
            throw boom.notFound('product not found'); //con boom , boom ya sabe que cofigo de error enviar en este caso 404
        }
        products.splice(index,1);
        return {id}; */
    }





module.exports = { find ,findOne,create,update,destroy};