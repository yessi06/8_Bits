const { Router } = require('express');
const { getGender } = require('../handlers/genderHandlers');
const genderRouter = Router();

genderRouter.get('/', getGender);

module.exports = genderRouter;