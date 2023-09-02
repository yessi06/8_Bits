const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
//const genreRouter = require('./genreRout');

const routerPf =  Router();

routerPf.use('/games', gamesRouter);
//router.use('/genre', genreRouter);

module.exports = routerPf;