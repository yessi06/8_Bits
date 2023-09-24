const { Game, Genre, SupportedPlatform } = require("../../db.js");

const postGame = async (req, res) => {
    try {
        const { name, image, description, releaseDate, SupportedPlatforms, Genres, price, review, stock } = req.body;
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
        for (const genreName of Genres) {
            const genreInstance = await Genre.findOne({ where: { name: genreName } });
            if (genreInstance) {
              await newGame.addGenre(genreInstance);
            } else {
              console.warn(`The Genre was not found: ${genreName}`);
            }
        }

        // Asociar plataformas
        for (const platformName of SupportedPlatforms) {
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