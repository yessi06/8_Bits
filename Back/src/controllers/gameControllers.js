require('dotenv').config();
const { Game, Gender, SupportedPlatform } = require('../db');
const { gameArray } = require('../controllers/listOfGames');

const getAllGames = async () => {
    try {
        const data = await Game.findAll({
            include: [
                {
                    model: Gender,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: SupportedPlatform,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                }
            ]
        });
        return data;
    } catch (error) {
        console.error('Error getting games', error);
        throw error;
    }
};


const gameById = async (id) => {
    try {
        const gameID = await Game.findByPk(id, {
            include: [
                {
                    model: Gender,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: SupportedPlatform,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                }
            ]
        });
        return gameID;
    } catch (error) {
        console.error(`Error getting game with id ${id}`, error);
        throw error;
    }
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

module.exports = {
    getAllGames,
    gameById,
    createGame,
};