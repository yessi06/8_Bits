const { Op } = require('sequelize');
const { getAllGames, gameById, createGame } = require('../controllers/gameControllers');
const { Game } = require('../db');


const getGameByNameHandler = async (req, res) => {
    const { name } = req.query;
    const allGames = await getAllGames();

    try {
        if(!name) return res.status(200).json(allGames)
        const filterByName = allGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
        if(filterByName.length === 0) return res.status(200).send(`There are no games with the name: ${name}`)
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
    const { genre, price, supportedPlatforms } = req.query;
    try {
        let games;

        const options = {}; //Objeto donde se van guardando todas las opciones de filtrado

        if(genre && genre !== 'All') {
            options.where = { genre };
        }
        
        if(price === 'Asc') {
            options.order = [['price', 'ASC']] // El order hace la funcion de ordenar segun los parametro pasados
        } else if(price === 'Desc') {
            options.order = [['price', 'DESC']]
        }

        if (supportedPlatforms) {
            // Convierte la lista de plataformas en un arreglo si se proporciona
            const platforms = supportedPlatforms.split(',');
      
            // Agrega la condición de compatibilidad con al menos una plataforma
            options.where = {
              ...options.where,
              supportedPlatforms: {
                [Op.overlap]: platforms,
              },
            };
          }

        games = await Game.findAll(options);
        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = { getGameByNameHandler, getGameByIdHandler, createGameHandler, filterGameHandler }