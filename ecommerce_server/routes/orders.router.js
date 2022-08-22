const express = require('express');
const {find,findOne,create,update,eliminate,addItem} = require('./../services/order.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {createOrderSchema,updateOrderSchema,getOrderSchema,addItemSchema} = require('./../schema/order.schema');

const router = express.Router();



router.get('/',async (req,res)=>{
   const orders = await find();
   res.json(orders);
});

router.get('/filter',async (req,res)=>{
    res.send('Hola mi server en expres desde filter');
});

router.get('/:id',validatorHandler(getOrderSchema,'params'),async (req,res,next)=>{  //validatorhandler es un middleware o el creador del middleware
    try {
        const {id} = req.params;
        const order = await findOne(id);
        res.json(order);
    } catch (error) {
        //aqui ejecutamos middleware de tipo error de forma explicita
        next(error);
    }
});

router.post('/',validatorHandler(createOrderSchema,'body'), async (req,res,next)=>{
    try {
        const body = req.body;
        const newOrder = await create(body); 
        res.status(201).json(newOrder);
    } catch (error) {
        next(error);
    }
    
});

router.patch('/:id',
    validatorHandler(getOrderSchema,'params'),
    validatorHandler(updateOrderSchema,'body'),
    async (req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const order = await update(id,body);
        res.json(order);
        
    } catch (error) {
        //res.status(404).json({message:error.message});respuesta sin middleware
        next(error);
    }
});

router.delete('/:id',validatorHandler(getOrderSchema,'params'), async (req,res,next)=>{
    try {
        const {id} = req.params;
        const response = await eliminate(id);
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.post('/add-item',validatorHandler(addItemSchema,'body'), async (req,res,next)=>{
    try {
        const body = req.body;
        const newItem = await addItem(body); 
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
    
});


module.exports = router;