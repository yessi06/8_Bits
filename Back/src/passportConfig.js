const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('./db');

passport.use(
    new LocalStrategy({
        usernameField: 'email', 
        passwordField: 'password', 
    }, async (email, password, done) => {
        try {
            // console.log('Email:', email);
            // console.log('Password:', password);

            const user = await User.findOne({where: { email } });
            if(!user) {
                return done(null, false, { message: 'User not found'})
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (validPassword) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Incorrect password'})
            }
        } catch (error) {
            return done(error)
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;