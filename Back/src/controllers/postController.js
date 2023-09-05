const { Game } = require('../models');

// Controlador para crear varios juegos a la vez
async function createGames(req, res, next) {
  try {
    const gamesData = req.body; // Debe ser un arreglo de juegos en JSON

    // Insertar varios juegos en la base de datos
    const createdGames = await Game.bulkCreate(gamesData);

    res.status(201).json(createdGames);
  } catch (error) {
    next(error); // Pasa el error al siguiente middleware de manejo de errores
  }
}

module.exports = {
  createGames,
};


//Ok
