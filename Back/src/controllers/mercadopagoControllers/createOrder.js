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

// const express = require('express');
// import mercadopago from 'mercadopago';

// export const createOrder = async (req, res) => {
// 	mercadopago.configure({
// 	  access_token: process.env.VENDEDOR_COL
// 	});
  
// 	// Crea la preferencia y configura el artículo
// 	const result = await mercadopago.preferences.create({
// 	  items: [
// 		{
// 		  title: req.body.description,
// 		  unit_price: Number(req.body.price),
// 		  quantity: Number(req.body.quantity),
// 		  currency_id: "USD",
// 		}
// 	  ],
// 	});
  
// 	console.log(result);
//   };
   
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



// 	let preference = {
// 		items: [
// 			{
// 				title: req.body.description,
// 				unit_price: Number(req.body.price),
// 				quantity: Number(req.body.quantity),
// 			}
// 		],
// 		back_urls: {
// 			"success": "http://localhost:8080/feedback",
// 			"failure": "http://localhost:8080/feedback",
// 			"pending": "http://localhost:8080/feedback"
// 		},
// 		auto_return: "approved",
// 	};

// 	mercadopago.preferences.create(preference)
// 		.then(function (response) {
// 			res.json({
// 				id: response.body.id
// 			});
// 		}).catch(function (error) {
// 			console.log(error);
// 		});
// });

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