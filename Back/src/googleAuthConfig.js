const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const { User } = require('./db');
const { OAuth2Client } = require('google-auth-library');
const tuClientId = '133571718056-qbem0tdcv46v6pk03e7v7qgmdpsvtg8p.apps.googleusercontent.com'
const tuClientSecret = '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'

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: tuClientId,
            clientSecret: tuClientSecret,
        },
        async (token, tokenSecret, profile, done) => {
            try {
                const client = new OAuth2Client(tuClientId);

                // Verifica el token de acceso con Google
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: tuClientId, // Debe coincidir con el cliente ID de tu aplicación
                });

            // Obtiene el payload del token verificado que contiene la información del usuario
                const payload = ticket.getPayload();
                // const googleId = payload.sub;
                const email = payload.email;

            // Verifica si el usuario ya existe en la base de datos
                const existingUser = await User.findOne({ where: { email } });

                if (existingUser) {
                    // El usuario ya existe, puedes devolverlo como usuario autenticado
                    return done(null, existingUser);
                  }
          
                  // El usuario no existe, créalo en la base de datos
                  const newUser = await User.create({
                    // googleId,
                    email,
                    // Otras propiedades del usuario
                  });
          
                  return done(null, newUser);
            } catch (error) {
                return done(error);
            }
        }
    )
)

module.exports = passport;