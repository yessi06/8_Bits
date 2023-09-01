const { Router } = require('express');
const { getGameByNameHandler, createGameHandler } = require('../handlers/gameHandlers');


const gamesRouter = Router();

gamesRouter.get('/', getGameByNameHandler);
gamesRouter.post('/', createGameHandler);


module.exports = gamesRouter;