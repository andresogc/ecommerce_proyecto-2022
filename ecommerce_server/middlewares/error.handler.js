
const { ValidationError } = require("sequelize");

//este es un middleware de tipo error por eso tiene err

function logErrors(err,req,res,next){
    console.error('logErrors');
    console.error(err);
    next(err);
}

function errorHandler(err,req,res,next){
    console.error('errorHandler');
    return res.status(500).json({
        message:err,
        stack:err.stack
    });
}

function boomErrorHandler(err,req,res,next){
    if(err.isBoom){
        const{output} = err;
        return res.status(output.statusCode).json(output.payload);
    }
    //si no es boom
    next(err); 
}

function ormErrorHandler(err,req,res,next){console.log('dede ormerror',err);
    if(err instanceof ValidationError){
        return res.status(409).json({
            statusCode:409,
            message:err.name,
            errors:err.errors
        });     
    }
    next(err);
}


module.exports = {logErrors,errorHandler,boomErrorHandler,ormErrorHandler};