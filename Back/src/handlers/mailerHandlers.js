const {sendMail, sendMailContact, sendMailResetPassword} = require('../helpers/nodemailer/mailer')
const {User, UserPassword} = require('../db');
const { generateRamdomString } = require('../helpers/utils/functionsAux');

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
        console.log(req.body, "bodysss");
        const {textMail, text} = req.body;
        await sendMailContact(textMail, text);
        res.status(200).send("We will contact you, Thank you")

    }catch(error){
        res.status(404).json({error: error.message});
    }
};

const mailerResetPasswordHandler = async (req, res)=>{
    
    try{
        const {email} = req.params;

        const user = await User.findOne({
            where:{
                email: email
            }
        });
        
        if(!user){
            return res.json("Email Incorrect")
        };

        let userPassword = await UserPassword.findOne({
            where:{
                userId : user.id,
                isUsed: false
            }
        });

        if(userPassword){
            userPassword.set('isUsed', true);
            userPassword.save();
        };

        const token = generateRamdomString(16);

        console.log(token, "token");

        userPassword = await UserPassword.create({
            userId : user.id,
            email: email,
            token: token,
            isUsed: false
        })
  await sendMailResetPassword(email, token);
  await userPassword.save(); 
  res.status(200).send("Send Email")

    }catch(error){
        res.status(404).json({error: error.message});
    }

}

module.exports={mailerHandler, mailerContactHandler, mailerResetPasswordHandler};