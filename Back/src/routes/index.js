const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGender = require('./genderRout');
const sendMailRouter = require('./sendMailRouter.js');

const routerPf =  Router();

routerPf.use('/games', gamesRouter);
routerPf.use('/gender', getGender);
routerPf.use('/send-mail', sendMailRouter);

module.exports = routerPf;