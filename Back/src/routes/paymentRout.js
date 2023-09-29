const { Router } = require('express');
const { getPayments,getPaymentsByGameId, getPaymentsByUserId } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);
paymentRouter.get('/:id', getPaymentsByGameId);
paymentRouter.get('/user/:id', getPaymentsByUserId)

module.exports = paymentRouter;