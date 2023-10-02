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


    async function sendMailContact(textMail, text){
        
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
            to: '8eigthbits@gmail.com',
            subject: "Contacto Client",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact Us - GameZone</title>
                <style>
                    /* Global Styles */
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #1a1a1a; /* Dark background color */
                        font-family: Arial, sans-serif;
                        color: #00FFFF; /* White text color */
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
                    <h1>Contact Us - 8Bits</h1>
                </div>
                <div class="content">
                    <p>8 Bits Team,</p>
                    <p>We have received a message from a customer:</p>
                    <p><strong>Email:</strong> ${textMail}</p>
                    <p><strong>Comment:</strong> ${text}</p>
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

    async function sendMailOrder(datapay){

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
            to: datapay.user.email,
            subject:"Successful Purchase",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Successful Purchase on 8 Bits</title>
                <style>
                    /* Global Styles */
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #1a1a1a; /* Dark background color */
                        font-family: Arial, sans-serif;
                        color: #ffffff; /* White text color */
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
            
                    /* Purchase Details Styles */
                    .purchase-details {
                        background-color: #F0FFF0; /* Dark gray background for purchase details */
                        padding: 15px;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
            
                    .item {
                        margin-bottom: 10px;
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
                    <h1>Successful Purchase on 8 Bits</h1>
                </div>
                <div class="content">
                    <p>Dear ${datapay.user.name} valued customer,</p>
                    <p>We are thrilled to inform you that your recent purchase on 8 Bits was successful! Thank you for choosing us for your gaming needs.</p>
                    
                    <div class="purchase-details">
                        <h2>Purchase Details</h2>
                        <p><strong>Order Number:</strong> #${datapay.idPayment}</p>
                        <p><strong>Total Amount:</strong> ${datapay.amount}</p>
                        <h3>Items:</h3>
                        <div class="item">
                            <p><strong>Game Title:</strong> ${datapay.game.name}</p>
                            <p><strong>Quantity:</strong> ${datapay.quentity}</p>
                            <p><strong>Price:</strong> ${datapay.game.price}</p>
                        </div>
                        <!-- Add more items as needed -->
                    </div>
            
                    <p>Your digital download keys or physical shipment details will be sent to you shortly. Enjoy your gaming adventure!</p>
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

    async function sendMailResetPassword(email, token){

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
        });



        const mailOptions={
            from:"8 Bits <8eigthbits@gmail.com>",
            to: email,
            subject:"Restore Password",
            html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Reset - GameZone</title>
                <style>
                    /* Global Styles */
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #F0FFF0; /* Dark background color */
                        font-family: Arial, sans-serif;
                        color: #111; /* White text color */
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
                        padding: 2  0px;
                        background-color: #111; /* Dark footer background color */
                    }             
                </style>
            </head>
            <body>
                <div class="header">
                <img src="https://res.cloudinary.com/bits8/image/upload/v1694119109/oxa5f4p1tsst7xzgj6bk.png" alt="8 Bits Logo" class="logo">
                    <h1>Password Reset - 8 Bits</h1>
                </div>
                <div class="content">
                    <p>Dear User,</p>
                    <p>We received a request to reset your password for your 8 Bits account. If you made this request, please follow the instructions below to reset your password:</p>
                    <p>Click the button below to reset your password:</p>
                    <a href="http://localhost:3000/ResetPassword?token=${token}" class="button">Reset Password</a>
                    <p>If you did not request a password reset, you can safely ignore this email. Your account remains secure.</p>
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

    


module.exports = {sendMail, sendMailContact, sendMailOrder, sendMailResetPassword};