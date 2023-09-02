const { Router } = require('express');
const { getGameByName } = require('../handlers/gameHandlers');
const { createGame } = require('../controllers/saveGames/saveGames');


const gamesRouter = Router();

gamesRouter.get('/', getGameByName);

//gamesHandler.post('/', postGame);

//Esta ruta es para traer los juegos a la base de datos
gamesRouter.post('/saveGames', createGame);


module.exports = gamesRouter;