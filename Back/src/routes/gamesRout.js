const { Router } = require('express');
const { getGames, getGameById , postGame} = require =('../handlers/gamesHandlers');
const gamesHandler = Router();

gamesHandler.get('/', getGames);

gamesHandler.get('/:name', getGameById);

gamesHandler.post('/', postGame);


module.exports = gamesHandler;