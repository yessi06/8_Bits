const { User } = require('../db');
const {sendMail} = require('../helpers/nodemailer/mailer');
const bcrypt = require('bcrypt');
const passport = require('../passportConfig');

const createUser = async (req, res) => {
    const { name, lastname, email, password } = req.body;

    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, lastname, email, password, admin: false,
        })
        
        res.status(201).json(user)
        sendMail(name, email)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await User.findAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ message: 'Successful login', user });
        });
    }
    // failureRedirect: '/login',
    // failureFlash: true
    )(req, res, next);
};

const logOutUser = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout successful' });
}
module.exports = { createUser, getUsers , loginUser, logOutUser };