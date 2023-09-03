const { Router } = require('express');
const { getGender } = require('../handlers/genderHandlers');
const {loadGenres} = require('../controllers/saveGames/saveGames');
const genderRouter = Router();

genderRouter.get('/', getGender);

genderRouter.post('/', loadGenres )

module.exports = genderRouter;