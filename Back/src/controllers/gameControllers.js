require('dotenv').config();
const { Game } = require('../db');

const getAllGames = async () => {
    const data = await Game.findAll()
    return data;
}

const gameById = async (id) => {
    const gameID = await Game.findByPK(id)
    return gameID;
}

module.exports = { getAllGames, gameById };