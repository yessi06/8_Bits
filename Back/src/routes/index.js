const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGender = require('./genderRout');
const userRouter = require('./userRout.js');

const routerPf =  Router();

routerPf.use('/games', gamesRouter);
routerPf.use('/gender', getGender);
routerPf.use('/user', userRouter);


module.exports = routerPf;