require('dotenv').config();
const { Game, Genre, Reviews, SupportedPlatform, User } = require('../../db');
const {getUserById} = require('../../handlers/userHandler');

const getAllGames = async () => {
    try {
        const data = await Game.findAll({
            include: [
                {
                    model: Genre,
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
                },
                
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
                    model: Genre,
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
                },
                {
                    model: Reviews,
                    include: [
                        {
                            model: User,
                            attributes:["name", "nickName", "image"]
                        }
                    ]
                    
                }
            ]
        });
       
        return gameID;
    } catch (error) {
        console.error(`Error getting game with id ${id}`, error);
        throw error;
    }
};


module.exports = {
    getAllGames,
    gameById,

};