const { Router } = require('express');
const { getGames, postGame} = require =('../handlers/gamesHandlers');
const gamesHandler = Router();

gamesHandler.get('/', getGames);
gamesHandler.post('/', postGame);


module.exports = gamesHandler;