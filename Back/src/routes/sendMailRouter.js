const {Router} = require('express');
const {mailerHandler, mailerContactHandler, mailerResetPasswordHandler } = require('../handlers/mailerHandlers');

const mailRouter = Router();

mailRouter.post('/', mailerHandler );
mailRouter.post('/contact', mailerContactHandler );
mailRouter.post('/resetPassword/:email', mailerResetPasswordHandler)

module.exports =  mailRouter;

