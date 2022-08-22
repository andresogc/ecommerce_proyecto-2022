const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const categoriesRouter = require('./category.router');
const ordersRouter = require('./orders.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');



function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);//aqui definimos un path global para las rutas que estan mas abajo (esto es la version 1 de la api)

    router.use('/products',productsRouter);
    router.use('/users',usersRouter);
    router.use('/customers',customersRouter);
    router.use('/categories',categoriesRouter);
    router.use('/orders',ordersRouter);
    router.use('/auth',authRouter);
    router.use('/profile',profileRouter);

    //siqueremos otra version aqui podemos definirla asi por ejemplo:
    //const router = express.Router();
    //app.use('/api/v2',router);




}

module.exports = routerApi;