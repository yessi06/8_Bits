const { Op } = require('sequelize');

const { getAllGames, gameById } = require('../controllers/gameControllers/gameControllers');
const {putGame} = require('../controllers/gameControllers/postGame')
const { Game, Genre, SupportedPlatform } = require('../db');

const getGameByNameHandler = async (req, res) => {
    const { name } = req.query;
    const allGames = await getAllGames();

    try {
        if(!name) return res.status(200).json(allGames)
        const filterByName = allGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
        if(filterByName.length === 0) return res.status(200).json(`There are no results for ${name}`)
        res.status(200).json(filterByName)
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const getGameByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const game = await gameById(id)
        res.status(200).json(game)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

const filterGameHandler = async (req, res) => {
    let { Genres, price, SupportedPlatforms } = req.query;

    if (typeof Genres === 'string' && Genres !== 'All') {
        Genres = Genres.split(',');
    } else {
        Genres = [];
    }

    if (typeof SupportedPlatforms === 'string') {
        SupportedPlatforms = SupportedPlatforms.split(',');
    } else {
        SupportedPlatforms = [];
    }

    try {
        let games;

        const options = {}; //Objeto donde se van guardando todas las opciones de filtrado

        if (Genres.length > 0) {
            options.include = options.include || [];
            options.include.push({
                model: Genre,
                where: {
                    name: {
                        [Op.in]: Genres,
                    },
                },
                as: 'Genres',
            });
        }

        if(price === 'Asc') {
            options.order = [['price', 'ASC']] // El order hace la funcion de ordenar segun los parametro pasados
        } else if(price === 'Desc') {
            options.order = [['price', 'DESC']]
        }

        if (SupportedPlatforms.length > 0) {
            options.include = options.include || [];
            options.include.push({
                model: SupportedPlatform,
                where: {
                    name: {
                        [Op.in]: SupportedPlatforms,
                    },
                },
                as: 'SupportedPlatforms',
            });
        }

        games = await Game.findAll(options);
        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

const putGameHandlers = async (req, res)=>{
    try{
        const changes = req.body;
        const {id} = req.params;
        const modifiedGame = await putGame(id, changes);
        res.status(202).json(modifiedGame)
    }catch(error){
        res.status(500).json({error: error.message})
    }

}

module.exports = { getGameByNameHandler, getGameByIdHandler, filterGameHandler, putGameHandlers }