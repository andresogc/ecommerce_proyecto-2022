const express = require('express');
const {find,findOne,create,update,destroy} = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {createProductSchema,updateProductSchema,getProductSchema,queryProductSchema,addImageSchema} = require('./../schema/product.schema');

const router = express.Router();



router.get('/', validatorHandler(queryProductSchema,'query'),async (req,res, next)=>{
    try {
        const products = await find(req.query);
        res.json(products);
    } catch (error) {
        next(error)
    }
   
});

router.get('/filter',async (req,res)=>{
    res.send('Hola mi server en expres dede filter');
});

router.get('/:id',validatorHandler(getProductSchema,'params'),async (req,res,next)=>{  //validatorhandler es un middleware o el creador del middleware
    try {
        const {id} = req.params;
        const product = await findOne(id);
        res.json(product);
    } catch (error) {
        //aqui ejecutamos middleware de tipo error de forma explicita
        next(error);
    }
});

router.post('/',validatorHandler(createProductSchema,'body'), async (req,res,next)=>{
    try {
        const body = req.body;
        const newProduct = await create(body); 
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }

});

router.patch('/:id',
    validatorHandler(getProductSchema,'params'),
    validatorHandler(updateProductSchema,'body'),
    async (req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const product = await update(id,body);
        res.json(product);
        
    } catch (error) {
        //res.status(404).json({message:error.message});respuesta sin middleware
        next(error);
    }
});

router.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    const response = await destroy(id);
    res.json(response);
});


module.exports = router;