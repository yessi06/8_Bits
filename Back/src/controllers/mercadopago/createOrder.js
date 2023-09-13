import mercadopago from 'mercadopago';

export const createOrder = async (req, res) => {
	mercadopago.configure({
	  access_token: process.env.VENDEDOR_COL
	});
  
	// Crea la preferencia y configura el artículo
	const result = await mercadopago.preferences.create({
	  items: [
		{
		  title: req.body.description,
		  unit_price: Number(req.body.price),
		  quantity: Number(req.body.quantity),
		  currency_id: "USD",
		}
	  ],
	});
  
	console.log(result);
  };
  
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