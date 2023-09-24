const { Router } = require('express');
const { loadSupportedPlatform} = require('../controllers/saveGamesControllers/saveGames');
const { platformStatistics, getPlatforms } = require('../handlers/platformHandlers');
const supportedPlatform = Router();

supportedPlatform.post('/', loadSupportedPlatform );
supportedPlatform.get('/statistics', platformStatistics);
supportedPlatform.get('/', getPlatforms);

module.exports = supportedPlatform;