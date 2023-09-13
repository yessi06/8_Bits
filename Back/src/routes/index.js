const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGender = require('./genderRout');
const sendMailRouter = require('./sendMailRouter.js');
const userRouter = require('./userRout.js');
const googleAuthRouter = require('./googleAuthRout.js');
const supportedPlatformRouter = require ('./supportedPlatformRout.js');


const routerPf =  Router();

routerPf.use('/games', gamesRouter);
routerPf.use('/gender', getGender);
routerPf.use('/send-mail', sendMailRouter);
routerPf.use('/user', userRouter);
routerPf.use('/google/auth', googleAuthRouter);
routerPf.use('/supportedPlatform', supportedPlatformRouter);



module.exports = routerPf;