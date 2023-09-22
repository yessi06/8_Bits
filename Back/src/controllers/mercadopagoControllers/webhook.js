const mercadopago = require('mercadopago');
const { Payment } = require ("../../db.js");


const webhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment["data.id"]);

            console.log("Pago guardado en la base de datos:", data);
        }

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { webhook };


//>>>>>>>>>>>>>>>>>>>>>>
// const mercadopago = require('mercadopago');
// const { Payment } = require ("../../db.js");


// const webhook = async (req, res) => {
//     const payment = req.query;

//     try {
//         if (payment.type === "payment") {
//             const data = await mercadopago.payment.findById(payment["data.id"]);

//             // Inicializar el modelo de pago
//             // const Payment = Payment(sequelize); // Pasa la instancia de Sequelize

//             // Crear un nuevo registro en tu base de datos
//             // await Payment.create({
//             //     idPayment: data.id,
//             //     idUser: data.userId, // Asegúrate de obtener este valor de acuerdo a tu lógica
//             //     idGame: data.gameId, // Asegúrate de obtener este valor de acuerdo a tu lógica
//             //     amount: data.amount,
//             //     status: data.status,
//             //     quentity: data.quantity // Asegúrate de obtener este valor de acuerdo a tu lógica
//             // });

//             console.log("Pago guardado en la base de datos:", data);
//         }

//         res.sendStatus(204);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: error.message });
//     }
// }

// module.exports = { webhook };
