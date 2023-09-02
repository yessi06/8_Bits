const { Router } = require('express');
const gamesRouter = require('./gamesRout.js');
const getGender = require('./genderRout');

const router =  Router();

router.use('/games', gamesRouter);
router.use('/gender', getGender);

module.exports = router;