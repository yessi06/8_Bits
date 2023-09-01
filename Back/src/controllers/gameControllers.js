require('dotenv').config();
const { Game } = require('../db');
const {gameArray} = require('../controllers/listOfGames');

const getAllGames = async () => {
    const data = await Game.findAll()
    return data;
};

const gameById = async (id) => {
    const gameID = await Game.findByPK(id)
    return gameID;
};

const createGame = async (name, image, description, releaseDate, supportedPlatforms, genre, price, review) =>{
    console.log(gameArray);
    const newGame = await Game.create({
        name,
        image,
        description,
        releaseDate,
        supportedPlatforms,
        genre,
        price,
        review
    });
    return newGame;
};

module.exports = { getAllGames, gameById, createGame };