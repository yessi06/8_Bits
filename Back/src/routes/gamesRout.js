const { Router } = require('express');
const { getGameByNameHandler, getGameByIdHandler, filterGameHandler, putGameHandlers } = require('../handlers/gameHandlers');
const { createGame } = require('../controllers/saveGamesControllers/saveGames');
const { postGame } = require('../controllers/gameControllers/postGame');
const {validatePostGame} = require('../middleware/validate')


const gamesRouter = Router();

//Esta ruta es para traer los juegos a la base de datos
gamesRouter.post('/saveGames', createGame);


gamesRouter.get('/', getGameByNameHandler);
gamesRouter.get('/filter', filterGameHandler);
gamesRouter.get('/:id', getGameByIdHandler);
gamesRouter.post('/postGame', validatePostGame, postGame);
gamesRouter.put('/:id', putGameHandlers);


module.exports = gamesRouter;