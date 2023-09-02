const { Router } = require('express');

const { getGameByName } = require('../handlers/gameHandlers');
const { createGame } = require('../controllers/saveGames/saveGames');

const gamesRouter = Router();

//Esta ruta es para traer los juegos a la base de datos
gamesRouter.post('/saveGames', createGame);


gamesRouter.get('/', getGameByNameHandler);
gamesRouter.get('/:id', getGameByIdHandler);


module.exports = gamesRouter;