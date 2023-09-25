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

  const putGame = async (id, changes)=>{
    // const game = await Game.findByPk(id);
    // game.set(changes)
    // await game.save();
    // return game
    try {
      // Actualizar el juego principal
      const game = await Game.findByPk(id);
      game.set(changes);
      await game.save();
  
      // Actualizar las plataformas compatibles
      const updatedPlatforms = changes.SupportedPlatforms || [];
  
      // Obtener la asociación actual entre el juego y las plataformas
      const currentPlatforms = await game.getSupportedPlatforms();
  
      // Eliminar las asociaciones que ya no están en la lista de cambios
      await Promise.all(
        currentPlatforms.map(async (platform) => {
          if (!updatedPlatforms.some((p) => p.name === platform.name)) {
            await game.removeSupportedPlatform(platform);
          }
        })
      );
  
      // Agregar nuevas asociaciones o actualizar las existentes
      await Promise.all(
        updatedPlatforms.map(async (platformData) => {
          let platform = await SupportedPlatform.findOne({
            where: { name: platformData.name }
          });
  
          if (!platform) {
            // Si la plataforma no existe, crea una nueva
            platform = await SupportedPlatform.create({
              name: platformData.name
            });
          }
  
          // Asocia la plataforma con el juego
          await game.addSupportedPlatform(platform);
        })
      );

      /** ------------------- actualización de los generos con los que se encuentra asiciado ---------------- */

       // Actualizar los géneros
      const updatedGenres = changes.Genres || [];

      // Obtener la asociación actual entre el juego y los géneros
      const currentGenres = await game.getGenres();

      // Eliminar las asociaciones que ya no están en la lista de cambios
      await Promise.all(
        currentGenres.map(async (genre) => {
          if (!updatedGenres.some((g) => g.name === genre.name)) {
            await game.removeGenre(genre);
          }
        })
      );

      // Agregar nuevas asociaciones o actualizar las existentes
      await Promise.all(
        updatedGenres.map(async (genreData) => {
          let genre = await Genre.findOne({
            where: { name: genreData.name }
          });

          if (!genre) {
            // Si el género no existe, créalo
            genre = await Genre.create({
              name: genreData.name
            });
          }

          // Asocia el género con el juego
          await game.addGenre(genre);
        })
      );
  
      return game;
    } catch (error) {
      console.error("Error al actualizar el juego:", error);
      throw error;
    }

  }
module.exports = {
    postGame,
    putGame
};