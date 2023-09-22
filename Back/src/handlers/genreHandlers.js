const { getGenreList } = require('../controllers/genreControllers/genreControllers');
const { Game, Genre, conn } = require('../db');

const getGenre = async (req, res) => {
    try{
        const genres = await getGenreList();
        res.status(201).json(genres);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

const genreStatistics = async (req, res) => {
    const sequelize = conn;

    try {
        const genreData = await Genre.findAll({
            attributes: [
                'name',
                [
                  sequelize.fn('count', sequelize.col('Games.id')),
                  'count',
                ], // Contamos 'Games.id' y le damos un alias 'count'
              ],
              include: [
                {
                  model: Game,
                  attributes: [],
                  through: {
                    attributes: [],
                  },
                },
              ],
              group: ['Genre.id'], // Agrupamos por género
              having: sequelize.where(sequelize.fn('count', sequelize.col('Games.id')), '>', 0),
            });
        
            res.status(200).json(genreData);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = { 
    getGenre,
    genreStatistics
};