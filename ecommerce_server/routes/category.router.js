const express = require('express');
const {find,findOne,create,update,destroy} = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {checkRoles} = require('./../middlewares/auth.handler');
const {createCategorySchema,updateCategorySchema,getCategorySchema} = require('./../schema/category.schema');
const passport = require('passport');


const router = express.Router();

router.get('/',
    passport.authenticate('jwt',{session:false}),
    checkRoles('administrator','customer'),async (req,res)=>{
   const categories = await find();
   res.json(categories);
});

router.get('/filter',async (req,res)=>{
    res.send('Hola mi server en expres dede filter');
});

router.get('/:id',
    passport.authenticate('jwt',{session:false}),
    checkRoles('administrator','customer'),
    validatorHandler(getCategorySchema,'params'),
    async (req,res,next)=>{  //validatorhandler es un middleware o el creador del middleware
    try {
        const {id} = req.params;
        const product = await findOne(id);
        res.json(product);
    } catch (error) {
        //aqui ejecutamos middleware de tipo error de forma explicita
        next(error);
    }
});

router.post('/',
    passport.authenticate('jwt',{session:false}),
    checkRoles('administrator'),  //se envian  los roles permitidos para la ruta
    validatorHandler(createCategorySchema,'body'), 
    async (req,res,next)=>{
    try {
        const body = req.body;
        const newCategory = await create(body); 
        console.log(newCategory);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);        
    }
});

router.patch('/:id',
    validatorHandler(getCategorySchema,'params'),
    validatorHandler(updateCategorySchema,'body'),
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