const {Router} = require('express');
const {mailerHandler, mailerContactHandler } = require('../handlers/mailerHandlers');

const mailRouter = Router();

mailRouter.post('/', mailerHandler );
mailRouter.post('/contact', mailerContactHandler );
// mailRouter.post('/order', mailerOrderHandler)

module.exports =  mailRouter;

