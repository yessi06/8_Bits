const { Router } = require('express');
const { loadSupportedPlatform} = require('../controllers/saveGames/saveGames');
const supportedPlatform = Router();

supportedPlatform.post('/', loadSupportedPlatform )

module.exports = supportedPlatform;