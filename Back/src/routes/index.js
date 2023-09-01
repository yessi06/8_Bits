const { Router } = require('express');
const { getGameByName, getGameById } = require('../handlers/gameHandlers')

const router = Router();

router.get('/games', getGameByName);
router.get('/games/:id', getGameById);

module.exports = router;