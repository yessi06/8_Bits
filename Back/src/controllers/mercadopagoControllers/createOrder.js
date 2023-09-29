require('dotenv').config();
const mercadopago = require('mercadopago');
const { Shopping, User, Game } = require("../../db.js");
const { VENDEDOR_COL } = process.env;

const createOrder = async (req, res) => {
  try {
    
    mercadopago.configure({
      access_token: VENDEDOR_COL 
    });
    

    // Obtener la compra
    const shoppingId = req.params.shoppingId;
    const shopping = await Shopping.findByPk(shoppingId);

    if (!shopping) {
      throw new Error('No se encontró la compra');
    }
    console.log("Shopping id", shopping);

    // Obtener el usuario asociado a la compra
    const users = await shopping.getUsers();
    if (users.length === 0) {
      throw new Error('No se encontró el usuario asociado a la compra');
    }
    const user = users[0]; 
    console.log("User id", user.id);

    // Obtener el juego asociado a la compra
    const games = await shopping.getGames();
    if (games.length === 0) {
      throw new Error('No se encontró el juego asociado a la compra');
    }
    const game = games[0]; 
    console.log("Games id", game.id);

    const unitPrice = parseFloat(game.price);
    console.log("Unit Price", unitPrice);

    console.log("Game name", game.name);

    //Hasta aqui todo va OK

    const result = await mercadopago.preferences.create({
      items: [
        {
          title: game.name,
          //user: user.id,
          quantity: shopping.quantity,                   
          unit_price: unitPrice, 
          currency_id: "USD",
        }
      ],
      back_urls: {
        success: (`https://eight-bits-back.onrender.com/mercadopago/paymentSuccess?unitPrice=${unitPrice}&shoppingQuantity=${shopping.quantity}&idUser=${user.id}&idGame=${game.id}`),
        failure: (`https://8-bits-front.vercel.app/Payment-failure`),
      },
    });
    res.json({data: result});

    
  } catch (error) {
    console.error('Error creating order', error);
    res.status(500).json({ error: 'Error creating order' });
  }
};


module.exports = { createOrder };
