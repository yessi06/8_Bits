const { getAllGames, gameById, createGame } = require('../controllers/gameControllers');


const getGameByNameHandler = async (req, res) => {
    const { name } = req.query;
    const allGames = await getAllGames();

    try {
        if(!name) return res.status(200).json(allGames)
        const filterByName = allGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
        if(filterByName.length === 0) return res.status(200).send(`There are no games with the name: ${name}`)
        res.status(200).json(allGames)
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

module.exports = { getGameByNameHandler, getGameByIdHandler, createGameHandler }