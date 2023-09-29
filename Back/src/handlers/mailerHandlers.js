const {sendMail, sendMailContact} = require('../helpers/nodemailer/mailer')

const mailerHandler = async (req, res)=>{
    
    try{
        const{name, email, phone, text} = req.body;
        const results= await sendMail(name, email, text);
        res.status(200).json(results)
    }catch(error){
        res.status(404).json({error: error.message});
    }
};

const mailerContactHandler= async(req, res)=>{
    try{
        const {textMail, text} = req.body;
        await sendMailContact(textMail, text);
        res.status(200).send("We will contact you, Thank you")

    }catch(error){
        res.status(404).json({error: error.message});
    }
};

// const mailerOrderHandler= async(req, res)=>{
//     try{
//         const {textMail, text} = req.body;
//         await sendMailContact(textMail, text);
//         res.status(200).send("We will contact you, Thank you")

//     }catch(error){
//         res.status(404).json({error: error.message});
//     }
// }

module.exports={mailerHandler, mailerContactHandler};