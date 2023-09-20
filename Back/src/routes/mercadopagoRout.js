const { Router } = require('express');
const { postShopping } = require('../controllers/mercadopagoControllers/postShopping');
const { createOrder } = require('../controllers/mercadopagoControllers/createOrder');

const mercadopagoRouter = Router();

mercadopagoRouter.post ('/', postShopping)
mercadopagoRouter.post ('/:shoppingId', createOrder)

module.exports = mercadopagoRouter;
