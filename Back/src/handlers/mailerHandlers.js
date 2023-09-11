const {sendMail} = require('../helpers/mailer')

const mailerHandler =  (req, res)=>{
    const{name, email, phone, text} = req.body;

    try{
        sendMail(name, email, text);
        res.status(200).json("enviado")
    }catch(error){
        res.status(404).json({error: error.message});
    }
};

module.exports={mailerHandler};