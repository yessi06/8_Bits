const { Router } = require('express');
const { getPayments,getPaymentsByGameId, getTopSellingGames, getTotalSales } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);
paymentRouter.get('/topselling', getTopSellingGames);
paymentRouter.get('/totalsales', getTotalSales);
paymentRouter.get('/:id', getPaymentsByGameId);

module.exports = paymentRouter;