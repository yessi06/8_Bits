const { Router } = require('express');
const { getPayments } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);

module.exports = paymentRouter;