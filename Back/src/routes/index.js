const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGender = require('./genderRout');

const routerPf =  Router();

routerPf.use('/games', gamesRouter);
routerPf.use('/gender', getGender);


module.exports = routerPf;