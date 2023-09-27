const { Payment } = require("../../db.js");

const paymentSuccess = async (req, res) => {
  const datosPago = req.query;

  try {
    const idPayment = datosPago.payment_id;
    const status = datosPago.status;
    const amount = req.query.unitPrice;
    const quentity = req.query.shoppingQuantity;
    const idUser = req.query.idUser;
    const idGame = req.query.idGame;


    const registroPago = await Payment.create({
      idPayment,
      status,
      amount,
      quentity,
      idUser,
      idGame,
    });

    console.log('Payment record created:', registroPago.toJSON());

    res.redirect(('https://8-bits-front.vercel.app/home-success/'));
  } catch (error) {
    console.error('Error creating payment record', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { paymentSuccess };