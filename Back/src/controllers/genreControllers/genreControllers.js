const { Genre } = require('../../db');

const getGenreList = async () => {
    const genreList = await Genre.findAll();
    return genreList
}

module.exports = {
    getGenreList
}