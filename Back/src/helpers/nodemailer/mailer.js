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
            text: `Hi ${name}, Welcome to our exciting online video game store! Here, your passion for video games comes to life. Explore a vast catalog of titles, from exciting adventures to challenging strategy games. Find exclusive offers, discover the latest releases, and connect with a community of passionate gamers. Get ready to dive into the world of gaming like never before!`
        };  

        const result = await transporter.sendMail(mailOptions)
        return result;

};


module.exports = {sendMail};