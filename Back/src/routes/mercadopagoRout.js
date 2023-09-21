const { Router } = require('express');
const { postShopping } = require('../controllers/mercadopagoControllers/postShopping');
const { createOrder } = require('../controllers/mercadopagoControllers/createOrder');
const { webhook } = require('../controllers/mercadopagoControllers/webhook');

const mercadopagoRouter = Router();

mercadopagoRouter.post ('/', postShopping)
mercadopagoRouter.post ('/:shoppingId', createOrder)
mercadopagoRouter.post ('/webhook', webhook)

module.exports = mercadopagoRouter;
