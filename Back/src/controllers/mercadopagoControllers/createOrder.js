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

// >>>>>>>>>>>> ESTE SI ME DABA BD DE SHOPPING
// require('dotenv').config();
// const mercadopago = require('mercadopago');
// const { Shopping, User, Game } = require("../../db.js");

// const { VENDEDOR_COL } = process.env;

// const createOrder = async (req, res) => {
//   try {
//     mercadopago.configure({
//       access_token: VENDEDOR_COL 
//     });

//     // Obtener la compra
//     const shoppingId = req.params.shoppingId;
//     const shopping = await Shopping.findByPk(shoppingId);

//     if (!shopping) {
//       throw new Error('No se encontró la compra');
//     }

//     console.log("Shopping id", shopping);

//     // Obtener el usuario asociado a la compra
//     const user = await User.findByPk(shopping.shopping_user);
//     if (!user) {
//       throw new Error('No se encontró el usuario');
//     }

//     console.log("User id", user);

//     // Obtener el juego asociado a la compra
//     const game = await Game.findByPk(shopping.GameId);
//     if (!game || !game.price) {
//       throw new Error('No se encontró el juego o el precio no está definido');
//     }

//     console.log("Game id", game);

//     const unitPrice = game.price;

//     const result = await mercadopago.preferences.create({
//       items: [
//         {
//           quantity: shopping.quantity, 
//           user: user.id, 
//           title: game.id,
//           unit_price: unitPrice * shopping.quantity, 
//           currency_id: "USD",
//         }
//       ],
//     });

//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.error('Error creating order', error);
//     res.status(500).json({ error: 'Error creating order' });
//   }
// };

// module.exports = { createOrder };

//>>>>>>>>>>>>>>>>>>>
// require('dotenv').config();
// const mercadopago = require('mercadopago');
// const { User, Game, Shopping } = require("../../db.js");

// const { ACCESS_TOKEN, VENDEDOR_COL, } = process.env;
// const createOrder = async (req, res) => {
//   try {
//     mercadopago.configure({
//       access_token: VENDEDOR_COL 
//     });

//     //Shopping
//     const shoppingId = req.params.shoppingId;
//     const shopping = await Shopping.findByPk(shoppingId);
//     if (!shopping) {
//       throw new Error('No se encontró la compra');
//     }
//     console.log("Shopping id" , shopping );


//     //User
//     const shoppingById = async (id) => {
//       try {
//           const shoppingID = await shopping.findByPk(id, {
//               include: [
//                   {
//                       model: User,
//                       attributes: ["id"],
//                       through: {
//                           attributes: [],
//                       },
//                   },
//                   {
//                       model: Game,
//                       attributes: ["id"],
//                       through: {
//                           attributes: [],
//                       },
//                   }
//               ]
//           });
//           return shoppingID;
//       } catch (error) {
//           console.error(`Error getting game with id ${id}`, error);
//           throw error;
//       }
//   // };
//   //   const userId = shopping.userId;
//   //   const user = await User.findByPk(userId);
//   //   if (!user) {
//   //     throw new Error('No se encontró el usuario');
//   //   }
//   //   console.log("User id" , user );


//   //   //Game
//   //   const gameId = shopping.gameId;
//   //   const game = await Game.findByPk(gameId);
//   //   console.log("game id" , game );

//   //   if (!game || !game.price) {
//   //     throw new Error('No se encontró el juego o el precio no está definido');
//   //   }

//     const unitPrice = game.price;
//     console.log("unit price" , unitPrice );

//     const result = await mercadopago.preferences.create({
//       items: [
//         {
//           quantity: shopping.quantity, 
//           user: user.id, 
//           title: game.id,
//           unit_price: unitPrice * shopping.quantity, 
//           currency_id: "USD",
//         }
//       ],
//     });

//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.error('Error creating order', error);
//     res.status(500).json({ error: 'Error creating order' });
//   }
// };

// module.exports = { createOrder };

//>>>>>>>>>>>>>>>>>>>>>>>

// const createOrder = async (req, res) => {
//   try {
//     mercadopago.configure({
//       access_token: VENDEDOR_COL 
//     });

//     const shoppingId = req.params.shoppingId;
//     const userId = shopping.UserId; // Asumiendo que el ID del usuario está en la propiedad UserId
//     const gameId = shopping.GameId; // Asumiendo que el ID del juego está en la propiedad gameId
    


//     const shopping = await Shopping.findByPk(shoppingId);
//     console.log("Shopping id" , shopping );

//     // Obtener el usuario asociado a esta compra
//     const user = await User.findByPk(userId);
//     console.log("User id" , user );


//     // Obtener los juegos asociados a esta compra
//     const game = await Game.findByPk(gameId);
//     console.log("game id" , game );


//     // Obtener el precio unitario del primer juego (ajusta según tu lógica)
//     const unitPrice = game.price;
//     console.log("unit price" , unitPrice );


//     const result = await mercadopago.preferences.create({
//       items: [
//         {
//           quantity: shopping.quantity, 
//           user: user[0].id, 
//           title: game[0].id,
//           unit_price: unitPrice * shopping.quantity, // Multiplicar el precio unitario por la cantidad
//           currency_id: "USD",
//         }
//       ],
//     });

//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.error('Error creating order', error);
//     res.status(500).json({ error: 'Error creating order' });
//   }
// };

// module.exports = { createOrder };

//>>>>>>>>>>>>>>>>

// require('dotenv').config();
// const mercadopago = require('mercadopago');
// const { User, Game, Shopping } = require("../../db.js");

// const { ACCESS_TOKEN, VENDEDOR_COL, } = process.env;


// const createOrder = async (req, res) => {
//   try {
//       mercadopago.configure({
//           access_token: VENDEDOR_COL 
//       });

//       const shoppingId = req.params.shoppingId;

//       // Obtener la información de la compra desde la base de datos
//       const shopping = await Shopping.findByPk(shoppingId);

//       // Obtener el usuario asociado a esta compra
//       const users = await shopping.getUsers(); // Esto asume que tienes una relación "users" en tu modelo Shopping

//       // Obtener el juego asociado a esta compra
//       const games = await shopping.getGames(); // Esto asume que tienes una relación "games" en tu modelo Shopping

//       const result = await mercadopago.preferences.create({
//           items: [
//               {
//                   quantity: shopping.quantity, 
//                   user: users[0].id, // Tomamos el primer usuario asociado (puedes ajustarlo según tu lógica)
//                   game: games[0].id, // Tomamos el primer juego asociado (puedes ajustarlo según tu lógica)
//                   unit_price: games.price,
//               }
//           ],
//       });

//       console.log(result);
//       res.json(result);
//   } catch (error) {
//       console.error('Error creating order', error);
//       res.status(500).json({ error: 'Error creating order' });
//   }
// };

// module.exports = { createOrder };

//>>>>>>>>>>>>>

// const createPreference = async (req, res) => {
//   const { userId, gameId } = req.body;

//   try {
//     // Consultar la base de datos para obtener la información del juego y el usuario
//     const game = await Game.findByPk(gameId);
//     const user = await User.findByPk(userId);

//     if (!game || !user) {
//       return res.status(400).json({ error: 'Game or user not found' });
//     }

//     const preference = {
//       items: [
//         {
//           title: game.name,
//           unit_price: game.price,
//           quantity: 1,
//         }
//       ],
//     };

//     const response = await mercadopago.preferences.create(preference);
//     const preferenceId = response.body.id;

//     // Guardar la preferencia en tu base de datos
//     await Payment.create({
//       userId,
//       gameId,
//       amount: game.price,
//       preferenceId,
//     });

//     res.json({ preferenceId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error al crear la preferencia');
//   }
// };

//>>>>>>>>>>>>>>>>>>>>

// require('dotenv').config();
// const mercadopago = require('mercadopago');
// const { User, Game, Shopping } = require("../db.js");


// const { ACCESS_TOKEN } = process.env;

// mercadopago.configure({
//   access_token: {ACCESS_TOKEN} 
// });

// const createPreference = async (req, res) => {
//   const { userId, gameId, amount } = req.body;

//   const preference = {
//     items: [
//       {
//         title: 'Producto Ejemplo',
//         unit_price: amount,
//         quantity: 1,
//       }
//     ],
//   };

//   try {
//     const response = await mercadopago.preferences.create(preference);
//     const preferenceId = response.body.id;

//     // Guardar la preferencia en tu base de datos
//     await Payment.create({
//       userId,
//       gameId,
//       amount,
//       preferenceId,
//     });

//     res.json({ preferenceId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error al crear la preferencia');
//   }
// };

// module.exports = { createPreference };

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

  
//>>>>>>>>>>>>>>>>

// import mercadopago from 'mercadopago';
// const { VENDEDOR_COL } = process.env;

// export const createOrder = async (req, res) => {
// 	mercadopago.configure({
// 		access_token: VENDEDOR_COL
// 	});

// 	const result = await mercadopago.preferences.create({
// 		items:[
// 		{
// 			title: req.body.description,
// 			unit_price: Number(req.body.price),
// 			quantity: Number(req.body.quantity),
// 			currency_id: "USD",
// 		}
// 	],
// })
// console.log (result)
// };

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