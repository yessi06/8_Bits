const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGenre = require('./genreRout.js');
const sendMailRouter = require('./sendMailRouter.js');
const userRouter = require('./userRout.js');
const googleAuthRouter = require('./googleAuthRout.js');
const supportedPlatformRouter = require ('./supportedPlatformRout.js');
const reviewsRout = require('./reviewsRout.js');


const routerPf =  Router();

routerPf.use('/games', gamesRouter);
routerPf.use('/genre', getGenre);
routerPf.use('/send-mail', sendMailRouter);
routerPf.use('/user', userRouter);
routerPf.use('/google/auth', googleAuthRouter);
routerPf.use('/supportedPlatform', supportedPlatformRouter);
routerPf.use('/reviews', reviewsRout);



module.exports = routerPf;