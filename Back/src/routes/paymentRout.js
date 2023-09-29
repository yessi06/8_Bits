const { Router } = require('express');
const { getPayments,getPaymentsByGameId, getPaymentsByUserId, getTopSellingGames, getTotalSales } = require('../handlers/paymentHandlers');

const paymentRouter = Router();
paymentRouter.get('/', getPayments);
paymentRouter.get('/:id', getPaymentsByGameId);paymentRouter.get('/user/:id', getPaymentsByUserId)
paymentRouter.get('/topselling', getTopSellingGames);
paymentRouter.get('/totalsales', getTotalSales);



module.exports = paymentRouter;