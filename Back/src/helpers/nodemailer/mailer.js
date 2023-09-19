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
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to 8 Bits!</title>
                <style>
                    /* Global Styles */
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #000000; /* Dark background color */
                        font-family: Arial, sans-serif;
                        color: #fffafa; /* White text color */
                    }
            
                    /* Header Styles */
                    .header {
                        background-color: #111; /* Dark header background color */
                        padding: 20px;
                        text-align: center;
                    }
            
                    /* Logo Styles */
                    .logo {
                        max-width: 150px;
                    }
            
                    /* Content Styles */
                    .content {
                        padding: 20px;
                    }
            
                    /* Button Styles */
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #2d7ebc; /* Blue button color */
                        color: #ffffff; /* White button text color */
                        text-decoration: none;
                        border-radius: 5px;
                    }
            
                    /* Footer Styles */
                    .footer {
                        text-align: center;
                        padding: 20px;
                        background-color: #111; /* Dark footer background color */
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <img src="https://res.cloudinary.com/bits8/image/upload/v1694119109/oxa5f4p1tsst7xzgj6bk.png" alt="8 Bits Logo" class="logo">
                    <h1>Welcome to 8 Bits!</h1>
                </div>
                <div class="content">
                    <p>Dear ${name},</p>
                    <p>Welcome to 8 Bits, your ultimate destination for the latest and greatest video games!</p>
                    <p> Here, your passion for video games comes to life. Explore a vast catalog of titles, from exciting adventures to challenging strategy games.
                     Find exclusive offers, discover the latest releases, and connect with a community of passionate gamers.
                      </p>
                    <p>Get ready to dive into the world of gaming like never before! Click the button below to start shopping now!</p>
                    <a href="https://8-bits-front.vercel.app/" class="button">Start Shopping</a>
                </div>
                <div class="footer">
                    <p>© 2023 8 Bits. All rights reserved.| Follow us on social media</p>
                </div>
            </body>
            </html>
            
            `
        };  

        const result = await transporter.sendMail(mailOptions)
        return result;

};


module.exports = {sendMail};