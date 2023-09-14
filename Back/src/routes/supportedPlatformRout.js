const { Router } = require('express');
const { loadSupportedPlatform} = require('../controllers/saveGamesControllers/saveGames');
const supportedPlatform = Router();

supportedPlatform.post('/', loadSupportedPlatform )

module.exports = supportedPlatform;