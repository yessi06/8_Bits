const { Op } = require('sequelize');
const { getAllGames, gameById, createGame } = require('../controllers/gameControllers');
const { Game, Gender, SupportedPlatform } = require('../db');


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

const createGameHandler = async (req, res) =>{
    try{
        const prueba = req.body;
        console.log(prueba);
        const {name, image, description, releaseDate, supportedPlatforms, genre, price, review } = req.body
        const newGame = await createGame(name, image, description, releaseDate, supportedPlatforms, genre, price, review);
        res.status(201).json("Successfully Created")

    }catch (error) {
        res.status(404).json({error: error.message})
    }
};

const filterGameHandler = async (req, res) => {
    let { Genders, price, SupportedPlatforms } = req.query;

    if (typeof Genders === 'string' && Genders !== 'All') {
        Genders = Genders.split(',');
    } else {
        Genders = [];
    }

    if (typeof SupportedPlatforms === 'string') {
        SupportedPlatforms = SupportedPlatforms.split(',');
    } else {
        SupportedPlatforms = [];
    }

    try {
        let games;

        const options = {}; //Objeto donde se van guardando todas las opciones de filtrado

        if (Genders.length > 0) {
            options.include = options.include || [];
            options.include.push({
                model: Gender,
                where: {
                    name: {
                        [Op.in]: Genders,
                    },
                },
                as: 'Genders',
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
        console.log(options)
        games = await Game.findAll(options);
        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = { getGameByNameHandler, getGameByIdHandler, createGameHandler, filterGameHandler }