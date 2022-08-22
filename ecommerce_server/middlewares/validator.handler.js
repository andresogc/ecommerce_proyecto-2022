const boom = require('@hapi/boom');


function validatorHandler(schema,property){
    return (req,res,next) =>{
        const data = req[property];
        
        const {error} = schema.validate(data,{abortEarly:false}); //abortEarly es para configurar si envia los errores uno por uno o los muestra todos de una vez 
        if(error){
            next(boom.badRequest(error));
        }
        next();
    }
}


module.exports = validatorHandler