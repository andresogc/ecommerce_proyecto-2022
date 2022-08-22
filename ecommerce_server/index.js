const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {logErrors,errorHandler,boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3000;
const {checkApiKey} = require('./middlewares/auth.handler');
//const port =  3000;

app.use(express.json());

const whiteList = ['http://localhost:8080','http://myapp.co','http://localhost:3000'];
const options={
    origin:(origin,callback)=>{
        if(whiteList.includes(origin) || !origin){
            callback(null,true);
        }else{
            callback(new Error('No permitido'));
        }
    }
}
//app.use(cors(options)) asi solo acepta las peticiones de la lista blanca que se configuro en options

app.use(cors());//asi acepta peticiones de cualquier origen si no se configuran opciones como las dearriba con una lista blanca y options

require('./utils/auth');

app.get('/',checkApiKey, (req,res)=>{
    res.send('Hola mi server en express');
});


routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
    console.log('Mi port' + port);
});