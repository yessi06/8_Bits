const { Router } = require('express');

const { getGameByNameHandler, getGameByIdHandler, filterGameHandler } = require('../handlers/gameHandlers');

const { createGame } = require('../controllers/saveGames/saveGames');
const { postGame } = require('../controllers/postGame');


const gamesRouter = Router();

//Esta ruta es para traer los juegos a la base de datos
gamesRouter.post('/saveGames', createGame);


gamesRouter.get('/', getGameByNameHandler);
gamesRouter.get('/:id', getGameByIdHandler);
gamesRouter.post('/filter', filterGameHandler);
gamesRouter.post('/postGame', postGame);







module.exports = gamesRouter;