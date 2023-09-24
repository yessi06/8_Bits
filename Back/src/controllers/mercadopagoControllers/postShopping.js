const { User, Shopping, Game } = require("../../db.js");

const postShopping = async (req, res) => {
    try {
        const { quantity, idUser, cart  } = req.body;
        
        // Crear un carrito en db
        const newShopping = await Shopping.create({
          quantity,
        });

        // Asociar usuarios
        const user = await User.findOne({
          where: { id:idUser },
        })
         await newShopping.addUser (user)

        // Asociar juegos
        for (const item of cart) {
          const game = await Game.findOne({
            where: { id: item.idGame }, // Aquí usa el ID del juego
          });
          await newShopping.addGame(game);
        }
  
          res.status(201).json({ message: 'Shopping created successfully' });
      } catch (error) {
          console.error('Error creating shopping', error);
          res.status(500).json({ error: 'Error creating shopping' });
      }
  };

module.exports = {
    postShopping
};