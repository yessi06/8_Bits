const { Router } = require('express');
const { getPayments,getPaymentsByGameId, getPaymentsByUserId, getTopSellingGames, getTotalSales, getPaymentById} = require('../handlers/paymentHandlers');

const paymentRouter = Router();
paymentRouter.get('/', getPayments);
paymentRouter.get('/topselling', getTopSellingGames);
paymentRouter.get('/totalsales', getTotalSales);
paymentRouter.get('/game/:id', getPaymentsByGameId);
paymentRouter.get('/user/:id', getPaymentsByUserId);
paymentRouter.get('/:id', getPaymentById)



module.exports = paymentRouter;