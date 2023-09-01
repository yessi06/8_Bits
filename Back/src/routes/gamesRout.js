const { Router } = require('express');
const { getGames, getGameByName, postGame} = require =('../handlers/gamesHandlers');
const gamesRouter = Router();

gamesRouter.get('/', getGameByName);
gamesRouter.get('/', getGames);
gamesRouter.post('/', postGame);






module.exports = gamesRouter;