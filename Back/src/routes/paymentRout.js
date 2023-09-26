const { Router } = require('express');
const { getPayments,getPaymentsByGameId } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);
paymentRouter.get('/:id', getPaymentsByGameId)

module.exports = paymentRouter;