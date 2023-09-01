const { Router } = require('express');
const { getGames, getGameByName, postGame} = require =('../handlers/gamesHandlers');
const gamesHandler = Router();

gamesRouter.get('/', getGameByName);
//gamesHandler.post('/', postGame);


const gamesRouter = Router();

gamesRouter.get('/', getGameByName);
//gamesHandler.post('/', postGame);


module.exports = gamesRouter;