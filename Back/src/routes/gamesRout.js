const { Router } = require('express');
const { getGameByNameHandler, createGameHandler, getGameByIdHandler } = require('../handlers/gameHandlers');


const gamesRouter = Router();

gamesRouter.get('/', getGameByNameHandler);
gamesRouter.post('/', createGameHandler);
gamesRouter.get('/:id', getGameByIdHandler);

module.exports = gamesRouter;