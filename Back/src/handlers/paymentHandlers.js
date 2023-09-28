const { Payment, Game, User } = require('../db');


const getPayments = async (req, res) => {
    try {
        const data = await Payment.findAll({
            include: [
                {
                  model: User,
                  attributes: ['email'],
                  as: 'user', 
                },
                {
                  model: Game,
                  attributes: ['name'],
                  as: 'game',
                },
              ],
              attributes: ['idPayment', 'amount', 'status', 'quentity'],
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPaymentsByGameId = async (req, res)=>{
  try{
    const {id} = req.params;
    const payData = await Payment.findAll({
      where: {
        idGame: id
      },
    });
    res.status(200).json(payData)

  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

const getPaymentById = async (id) => {
  
      const data = await Payment.findOne({
          include: [
              {
                model: User,
                attributes: [ 'name', 'email'],
                as: 'user', 
              },
              {
                model: Game,
                attributes: ['name','price'],
                as: 'game',
              },
            ],
            attributes: ['idPayment', 'amount', 'status', 'quentity'],
      }) 
      console.log(data, "dataa");
      return data
};

module.exports = { getPayments, getPaymentsByGameId, getPaymentById}