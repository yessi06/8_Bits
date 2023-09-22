const { Router } = require('express');
const { getGenre, genreStatistics } = require('../handlers/genreHandlers');
const {loadGenres} = require('../controllers/saveGamesControllers/saveGames');
const genreRouter = Router();

genreRouter.get('/', getGenre);
genreRouter.get('/statistics', genreStatistics);

genreRouter.post('/', loadGenres )

module.exports = genreRouter;