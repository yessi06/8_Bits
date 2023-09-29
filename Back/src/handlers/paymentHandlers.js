const { Payment, Game, User, conn } = require('../db');


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

const getTopSellingGames = async (req, res) => {
const Sequelize = conn;

    try {
        const data = await Payment.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('Payment.id')), 'quantitySold'],
                [Sequelize.col('game.name'), 'gameName'],
              ],
              include: [
                {
                  model: Game,
                  attributes: [],
                  as: 'game',
                },
              ],
              group: ['game.id', 'gameName'],
              order: [[Sequelize.fn('COUNT', Sequelize.col('Payment.id')), 'DESC']],
              limit: 5,
          });
      
          res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTotalSales = async (req,res) => {
    try {
        const totalGamesSold = await Payment.sum('quentity');
        const totalRevenue = await Payment.sum('amount');

        res.json({ totalGamesSold, totalRevenue })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const getPaymentsByUserId = async (req, res)=>{
  try{
    const {id} = req.params;
    const payData = await Payment.findAll({
      where: {
        idUser: id
      },
      include:{
        model: Game,
        attributes:["id", "name", "image"],
        as: "game"
      }
    });
    res.status(200).json(payData)
    
  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPayments, getPaymentsByGameId, getPaymentById, getTopSellingGames, getTotalSales, getPaymentsByUserId }
