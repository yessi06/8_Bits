const { Game, Gender, SupportedPlatform } = require("../db.js");

const postGame = async (req, res) => {
    try {
        const { name, image, description, releaseDate, supportedPlatform, genre, price, review, stock } = req.body;

        // Comprobación de campos obligatorios
        if (!name || !image || !description || !releaseDate || !supportedPlatform || !genre || !price || !review || !stock) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Crear un nuevo juego
        const newGame = await Game.create({
            name,
            image,
            description,
            releaseDate,
            price,
            review,
            stock,
        });

        // Asociar géneros
        for (const genreName of genre) {
            const genreInstance = await Gender.findOne({ where: { name: genreName } });
            if (genreInstance) {
              await newGame.addGender(genreInstance);
            } else {
              console.warn(`No se encontró el género: ${genreName}`);
            }
        }

        // Asociar plataformas
        for (const platformName of supportedPlatform) {
            const platformInstance = await SupportedPlatform.findOne({ where: { name: platformName } });
            if (platformInstance) {
              await newGame.addSupportedPlatform(platformInstance);
            } else {
                console.warn(`Platform not found: ${platformName}`);
              }
          }
  
          res.status(201).json({ message: 'Game created successfully' });
      } catch (error) {
          console.error('Error creating game', error);
          res.status(500).json({ error: 'Error creating game' });
      }
  };

module.exports = {
    postGame
};