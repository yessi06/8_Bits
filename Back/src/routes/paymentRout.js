const { Router } = require('express');

const { getPayments,getPaymentsByGameId, getPaymentById, getTopSellingGames, getTotalSales } = require('../handlers/paymentHandlers');

const paymentRouter = Router();

paymentRouter.get('/', getPayments);

paymentRouter.get('/:id', getPaymentsByGameId);
// paymentRouter.get('/order/:id', getPaymentById)
paymentRouter.get('/topselling', getTopSellingGames);
paymentRouter.get('/totalsales', getTotalSales);
paymentRouter.get('/:id', getPaymentsByGameId);


module.exports = paymentRouter;