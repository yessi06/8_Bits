const { Router } = require('express');
const { getGameByName } = require('../handlers/gameHandlers');


const gamesRouter = Router();

gamesRouter.get('/', getGameByName);
//gamesHandler.post('/', postGame);


module.exports = gamesRouter;