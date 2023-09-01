const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
//const genreRouter = require('./genreRout');

const router =  Router();

router.use('/games', gamesRouter);
//router.use('/genre', genreRouter);

module.exports = router;