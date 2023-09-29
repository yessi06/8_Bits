const { Payment } = require("../../db.js");
const {getPaymentById} = require("../../handlers/paymentHandlers.js");
const {sendMailOrder} = require("../../helpers/nodemailer/mailer.js")

const paymentSuccess = async (req, res) => {
  const datosPago = req.query;

  try {
    const idPayment = datosPago.payment_id;
    const status = datosPago.status;
    const amount = req.query.unitPrice;
    const quentity = req.query.shoppingQuantity;
    const idUser = req.query.idUser;
    const idGame = req.query.idGame;

    console.log('idPayment:', idPayment);
    console.log('status:', status);

    const registroPago = await Payment.create({
      idPayment,
      status,
      amount,
      quentity,
      idUser,
      idGame,
    });
    console.log(registroPago, "registro pago");
    console.log('Payment record created:', registroPago.toJSON());


    res.redirect(`https://8-bits-front.vercel.app/payment-success`);
    
    const dataPay = await getPaymentById(registroPago.id);
    const dataMailer = await sendMailOrder(dataPay)
    
  } catch (error) {
    console.error('Error creating payment record', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { paymentSuccess };
