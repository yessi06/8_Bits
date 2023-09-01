const { Router } = require('express');
const { getGenres } = require('../handlers/genresHandlers');
const genresHandler = Router();

genresHandler.get('/', getGenres);

module.exports = genresHandler;