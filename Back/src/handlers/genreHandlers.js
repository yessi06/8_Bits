const { getGenreList } = require('../controllers/genreControllers/genreControllers');

const getGenre = async (req, res) => {
    try{
        const genres = await getGenreList();
        res.status(201).json(genres);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { 
    getGenre 
};