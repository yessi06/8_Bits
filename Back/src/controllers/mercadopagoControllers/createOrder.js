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
          user: user.id,
          quantity: shopping.quantity,                   
          unit_price: unitPrice, 
          currency_id: "USD",
        }
      ],
      back_urls: {
        success: "https://8-bits-front.vercel.app/Store",
        failure: "https://8-bits-front.vercel.app/Store",
        pending: "https://8-bits-front.vercel.app/Store",
      },
      notification_url: "https://eight-bits-back.onrender.com/webhook"
    });

    console.log(result);
    res.json(result);
  } catch (error) {
    console.error('Error creating order', error);
    res.status(500).json({ error: 'Error creating order' });
  }
};

module.exports = { createOrder };


//>>>>>>>>>>>>>>>


//   // Endpoint para procesar pagos
//   app.post('/pagar', (req, res) => {
// 	// Obtiene la información del carrito desde el frontend
// 	const carrito = req.body.carrito;
  
// 	// Crea un objeto de preferencia de Mercado Pago
// 	const preference = {
// 	  items: carrito,
// 	};
  
// 	// Crea la preferencia y envía la URL de pago al frontend
// 	mercadopago.preferences.create(preference)
// 	  .then(response => {
// 		res.json({ url_pago: response.body.init_point });
// 	  })
// 	  .catch(error => {
// 		console.error(error);
// 		res.status(500).send('Error al procesar el pago');
// 	  });
//   });
  
//   // Inicia el servidor
//   app.listen(3000, () => {
// 	console.log('Servidor iniciado en el puerto 3000');
//   });

  
//>>>>>>>>>>>>>>>>>

// app.get('/feedback', function (req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });

// app.listen(8080, () => {
// 	console.log("The server is now running on Port 8080");
// })