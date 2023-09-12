const { Router } = require('express');
const loginGoogle = require('../handlers/googleAuthHandler');

const googleAuthRouter = Router();

googleAuthRouter.post('/', loginGoogle);

module.exports = googleAuthRouter;