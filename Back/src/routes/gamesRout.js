const { Router } = require('express');
const { getGames, getGameByname , postGame} = require =('../handlers/gamesHandlers');
const gamesHandler = Router();

gamesHandler.get('/', getGames);

gamesHandler.get('/:name', getGameByname);

gamesHandler.post('/', postGame);


module.exports = gamesHandler;