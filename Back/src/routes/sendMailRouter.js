const {Router} = require('express');
const {mailerHandler} = require('../handlers/mailerHandlers');

const mailRouter = Router();

mailRouter.post('/', mailerHandler);

module.exports =  mailRouter;

