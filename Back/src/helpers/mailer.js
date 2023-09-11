const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const {CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
      REFRESH_TOKEN
}=process.env

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
    );

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
    

async function sendMail(name, email, text){

        const accessToken= await oAuth2Client.getAccessToken();
        const transporter= await nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"8eigthbits@gmail.com",
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:accessToken,
            },
        })

        const mailOptions={
            from:"8 Bits <8eigthbits@gmail.com>",
            to: email,
            subject:"Welcome to 8 Bits",
            text: `Hi ${name}, ${text}`
        };  

        const result = await transporter.sendMail(mailOptions)
        return result;

};


module.exports = {sendMail};