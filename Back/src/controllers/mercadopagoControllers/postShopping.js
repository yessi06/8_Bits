const { User, Shopping, Game } = require("../../db.js");

const postShopping = async (req, res) => {
    try {
        const { quantity, idUser, idGame } = req.body;
        
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
        const game = await Game.findOne({
          where: { id:idGame },
        })
         await newShopping.addGame (game)
  
          res.status(201).json({ message: 'Shopping created successfully' });
      } catch (error) {
          console.error('Error creating shopping', error);
          res.status(500).json({ error: 'Error creating shopping' });
      }
  };

module.exports = {
    postShopping
};