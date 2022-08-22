const express = require('express');
const {find,findOne,create,update,eliminate} = require('./../services/customer.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {createCustomerSchema,updateCustomerSchema,getCustomerSchema} = require('./../schema/customer.schema');

const router = express.Router();

router.get('/',async (req,res,next)=>{
    try {
        const customers = await find();
        res.json(customers);
    } catch (error) {
        next();    
    }
   
});

router.get('/filter',async (req,res)=>{
    res.send('Hola mi server en expres desde filter');
});

router.get('/:id',validatorHandler(getCustomerSchema,'params'),async (req,res,next)=>{  //validatorhandler es un middleware o el creador del middleware
    try {
        const {id} = req.params;
        const customer = await findOne(id);
        res.json(customer);
    } catch (error) {
        //aqui ejecutamos middleware de tipo error de forma explicita
        next(error);
    }
});

router.post('/',validatorHandler(createCustomerSchema,'body'), async (req,res,next)=>{
    try {
        const body = req.body;
        const newCustomer = await create(body);

        res.status(201).json(newCustomer);
    } catch (error) {
        next(error);
    }
    
});

router.patch('/:id',
    validatorHandler(getCustomerSchema,'params'),
    validatorHandler(updateCustomerSchema,'body'),
    async (req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const customer = await update(id,body);
        res.json(customer);
        
    } catch (error) {
        //res.status(404).json({message:error.message});respuesta sin middleware
        next(error);
    }
});

router.delete('/:id',validatorHandler(getCustomerSchema,'params'), async (req,res,next)=>{
    try {
        const {id} = req.params;
        const response = await eliminate(id);
        res.json(response);
    } catch (error) {
        next(error);
    }
});


module.exports = router;