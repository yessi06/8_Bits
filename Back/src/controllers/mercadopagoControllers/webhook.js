const { Payment } = require("../../db.js");

const webhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment["data.id"]);

            // Asumiendo que 'idPayment' es un campo válido en tu modelo Payment
            const idPayment = data.idPayment;

            // Crea un nuevo registro en la tabla Payment
            const nuevoPago = await Payment.create({
                idPayment: idPayment,
            });

            console.log("Pago creado:", nuevoPago);

            // Responde con el objeto de pago
            res.json(nuevoPago);
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { webhook };


//>>>>>>>>>>>>>>>
// const { Payment } = require("../../db.js");

// const webhook = async (req, res) => {
//     const payment = req.query;

//     try {
//         if (payment.type === "payment") {
//             const data = await mercadopago.payment.findById(payment["data.id"]);

//             // const shoppingId = data.order.id;
//             // const shopping = await Shopping.findByPk(shoppingId);
//             // const users = await shopping.getUsers();
//             // const user = users[0];
//             // const userId = user.id;

//             // const games = await shopping.getGames();
//             // const game = games[0];
//             // const gameId = game.id;

//             // Guardar el pago en la base de datos
//             await Payment.create({
//                 idPayment: data.idPayment,
//                 // idUser: userId,
//                 // idGame: gameId,
//                 // amount: data.amount,
//                 // status: data.status,
//                 // quentity: data.quentity,
//             });

//             // console.log("Pago guardado en la base de datos:", data);
//             console.log(Payment);
//             res.json(Payment);
//         }

//         res.sendStatus(204);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: error.message });
//     }
// }

// module.exports = { webhook };
