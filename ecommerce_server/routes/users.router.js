const express = require('express');
const {find,findOne,create,update,eliminate} = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {createUserSchema,updateUserSchema,getUserSchema} = require('./../schema/user.schema');

const router = express.Router();



router.get('/',async (req,res)=>{
   const users = await find();
   res.json(users);
});

router.get('/filter',async (req,res)=>{
    res.send('Hola mi server en expres desde filter');
});

router.get('/:id',validatorHandler(getUserSchema,'params'),async (req,res,next)=>{  //validatorhandler es un middleware o el creador del middleware
    try {
        const {id} = req.params;
        const user = await findOne(id);
        res.json(user);
    } catch (error) {
        //aqui ejecutamos middleware de tipo error de forma explicita
        next(error);
    }
});

router.post('/',validatorHandler(createUserSchema,'body'), async (req,res,next)=>{
    try {
        const body = req.body;
        const newUser = await create(body); 
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
    
});

router.patch('/:id',
    validatorHandler(getUserSchema,'params'),
    validatorHandler(updateUserSchema,'body'),
    async (req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const user = await update(id,body);
        res.json(user);
        
    } catch (error) {
        //res.status(404).json({message:error.message});respuesta sin middleware
        next(error);
    }
});

router.delete('/:id',validatorHandler(getUserSchema,'params'), async (req,res,next)=>{
    try {
        const {id} = req.params;
        const response = await eliminate(id);
        res.json(response);
    } catch (error) {
        next(error);
    }
});


module.exports = router;