const { Router } = require('express');
const { getPayments,getPaymentsByGameId, getPaymentById } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);
paymentRouter.get('/:id', getPaymentsByGameId);
// paymentRouter.get('/order/:id', getPaymentById)

module.exports = paymentRouter;