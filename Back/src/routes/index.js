const { Router } = require('express');

const gamesRouter = require('./gamesRout');
const genreRouter = require('./genreRout');

const router =  Router();

router.use('/games', gamesRouter);
router.use('/genre', genreRouter);

module.exports = router;