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
    // console.log("Shopping id", shopping);

    // Obtener el usuario asociado a la compra
    const users = await shopping.getUsers();
    if (users.length === 0) {
      throw new Error('No se encontró el usuario asociado a la compra');
    }
    const user = users[0]; 
    // console.log("User id", user.id);

    // Obtener el juego asociado a la compra
    const games = await shopping.getGames();
    if (games.length === 0) {
      throw new Error('No se encontró el juego asociado a la compra');
    }
    const game = games[0]; 
    // console.log("Games id", game.id);

    const unitPrice = parseFloat(game.price);
    // console.log("Unit Price", unitPrice);

    // console.log("Game name", game.name);

    //Hasta aqui todo va OK

        // Crear los parámetros únicos para cada juego
        const gameParams = games.map((game, index) => ({
          [`idGame${index}`]: game.id,
          [`gameName${index}`]: game.name,
          [`unitPrice${index}`]: parseFloat(game.price),
        }));
    
        // Construir la URL de éxito con los parámetros de los juegos
        const successURL = `https://8-bits-front.vercel.app/home/paymentSuccess?shoppingQuantity=${shopping.quantity}&${gameParams.map((params) => Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')).join('&')}`;
        const failureURL = `https://8-bits-front.vercel.app/home-failure`;

    const result = await mercadopago.preferences.create({
      items: [
        {
          title: game.name,
          quantity: shopping.quantity,
          unit_price: parseFloat(game.price),
          idGame: game.id,
          currency_id: "USD",
          
        }
      ],
      back_urls: {
        success: successURL,
        failure: failureURL,
        pending: "https://8-bits-front.vercel.app/Store",
      },
    });

    console.log(shopping.quantity);

    
    
    
    res.json({data: result});

    
  } catch (error) {
    console.error('Error creating order', error);
    res.status(500).json({ error: 'Error creating order' });
  }
};


module.exports = { createOrder };