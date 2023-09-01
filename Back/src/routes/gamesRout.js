const { Router } = require('express');
const { getGameById, getGameByName, postGame} = require('../handlers/gameHandlers');
const gamesRouter = Router();

gamesRouter.get('/', getGameByName);
gamesRouter.get('/:id', getGameById);
gamesRouter.post('/', postGame);






module.exports = gamesRouter;