const { User } = require('../db');
const axios = require('axios');
const{sendMail} = require('../helpers/nodemailer/mailer')
const { findUser, createUserGoogle} = require('../controllers/googleAuthControllers/googleAuthController')

const loginGoogle = async (req, res) => {
    const { token } = req.body
    const googleResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const {email, name} = googleResponse.data

    try {
        const user = await findUser(email)

        if(user) {
        return res.status(200).json({message: 'Successful login', user, authMethod: 'google'})
        }   
        else {
            const newUser = await createUserGoogle({
                email,
                name,
                lastname: 'Google Auth',
                password: 'Google Auth',
                disable: false,
                admin: false,
            });
            sendMail(name, email)
            return res.status(200).json({message: 'Successful login', newUser, authMethod: 'google'});
            
        }

    } catch (error) {
        return res.status(500).json({error: 'Authentication Error'})
    } 
};

module.exports = loginGoogle;

// const passport = require('../googleAuthConfig');

// const loginGoogle = (req, res) => {
//     const { token } = req.body;

//     passport.authenticate('google-token', (err, user) => {
//         if(err) {
//             console.error('Error de autenticación:', err);
//             return res.status(500).json({error: 'Authentication Error'})
//         }
//         if(!user) {
//             console.warn('Usuario no autorizado');
//             return res.status(401).json({error: 'Not authorized'})
//         }

//         return res.status(200).json(user)
//     })(req, res);
// }

// module.exports = loginGoogle;
