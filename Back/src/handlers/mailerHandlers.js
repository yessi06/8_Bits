const {sendMail} = require('../helpers/nodemailer/mailer')

const mailerHandler = async (req, res)=>{
    const{name, email, phone, text} = req.body;

    try{
        const results= await sendMail(name, email, text);
        res.status(200).json(results)
    }catch(error){
        res.status(404).json({error: error.message});
    }
};

module.exports={mailerHandler};