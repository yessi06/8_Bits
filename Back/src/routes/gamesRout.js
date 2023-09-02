const { Router } = require('express');
const { getGameByNameHandler, createGameHandler, getGameById } = require('../handlers/gameHandlers');


const gamesRouter = Router();

gamesRouter.get('/', getGameByNameHandler);
gamesRouter.post('/', createGameHandler);
gamesRouter.get('/:id', getGameById);

module.exports = gamesRouter;