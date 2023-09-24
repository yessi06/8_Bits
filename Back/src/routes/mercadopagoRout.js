const { Router } = require('express');
const { postShopping } = require('../controllers/mercadopagoControllers/postShopping');
const { createOrder } = require('../controllers/mercadopagoControllers/createOrder');
const { paymentSuccess } = require('../controllers/mercadopagoControllers/paymentSuccess');


const mercadopagoRouter = Router();

mercadopagoRouter.post ('/', postShopping)
mercadopagoRouter.post ('/:shoppingId', createOrder)
mercadopagoRouter.get('/paymentSuccess', paymentSuccess)

module.exports = mercadopagoRouter;

