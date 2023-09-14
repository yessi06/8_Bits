const { Router } = require('express');
const { getGenre } = require('../handlers/genreHandlers');
const {loadGenres} = require('../controllers/saveGamesControllers/saveGames');
const genreRouter = Router();

genreRouter.get('/', getGenre);

genreRouter.post('/', loadGenres )

module.exports = genreRouter;