const { User, Reviews, Game, UserPassword, Background} = require('../db');
const {sendMail} = require('../helpers/nodemailer/mailer');
const bcrypt = require('bcrypt');
const passport = require('../passportConfig');
const {generateHash} = require('../helpers/utils/functionsAux')
const { Op } = require('sequelize');


const createUser = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    
    try {
        const user = await User.create({
            name, lastname, email, password , admin: false, 
        })
        let userId = user.id;
       const background =  await Background.create({userId})
        res.status(201).json(user)
        sendMail(name, email)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await User.findAll()
        const prueba = await data.map(async (user)=>{
            console.log(user, "useer");
            let userId = user.id;
            console.log(userId, "useerdid");
          let usuarios =  await  Background.findOrCreate({
            where: {userId}
          })

        })
        console.log(prueba, "pruebaaa");
        console.log();
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

            res.cookie('miCookie', JSON.stringify(user), {
                httpOnly: false,
                maxAge: 7 * 24 * 60 * 60 * 1000, // Duración de la cookie en milisegundos (7 días)
                sameSite: 'None',
                secure: true,
                signed: true
            });

            return res.status(200).json({ message: 'Successful login', user, authMethod: 'local'});
        });
    }
    // failureRedirect: '/login',
    // failureFlash: true
    )(req, res, next);
};

const logOutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.clearCookie('miCookie');
        res.status(200).json({ message: 'Logout successful' });
    });
};

const getUserById = async (req, res )=>{

    try{
        const {id} = req.params;
    const user = await User.findOne({
        where: {id},
        include:[
            {
                model: Background,
                attributes:["backgroundImage"],
            },
            {
                model: Reviews,
                include: [
                    {
                        model: Game,
                        attributes:["name", "image"]
                    }
                ],  
            }  
        ],   
    });

    res.status(200).json(user)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
         user.set(changes);
         await user.save()
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const filterUserByNameOrEmail = async (req, res) => {
    const { searchTerm, email } = req.query;

    try {
      if (!searchTerm && !email) {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers);
      }

    let options = {};
    
    if (searchTerm) {
        options[Op.or] = [
            {
                nickName: {
                    [Op.iLike]: `%${searchTerm}%`,
                },
            },
            {
                name: {
                    [Op.iLike]: `%${searchTerm}%`,
                },
            },
            {
                email: {
                    [Op.iLike]: `%${searchTerm}%`
                },
            },
        ];
    }

    if (email) {
        options.email = {
            [Op.iLike]: `%${email}%`,
        };
    }
  
      const filterUsers = await User.findAll({
        where: options,
      });
  
      if (filterUsers.length === 0) {
        res.status(200).json(`There are no results for ${searchTerm}`);
      } else {
        res.status(200).json(filterUsers);
      }

    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

const userResetPasswordHandler = async (req, res)=>{
    try{
        const {token} = req.params;
        const{ password, password1 } = req.body;

        const userPassword = await UserPassword.findOne({
            where:{
                token: token
            }
        });

        
         if(!userPassword){
            return res.send("Dont exist Restore Password")
         }
            console.log(userPassword.isUsed, "1");
         if(userPassword.isUsed === true){
            return res.send("Token Expired")
         }

         if(password !== password1){
            return res.send("Passwords do not match")
         }

         userPassword.set( "isUsed", true);
         await userPassword.save();

         console.log(userPassword.isUsed, "2");

         const user = await User.findByPk(userPassword.userId);

         console.log(user.name, "username");

         const passwordHash = generateHash(password);
         
         console.log(passwordHash, "passwordHash");


         user.set("password", passwordHash);
          await user.save();

          console.log(user, "userfinal");

          res.send("Successfull")

    }catch(error){
        res.status(404).json({error: error.message});
    }
};

const putBackground = async( req, res )=>{
    
   try {
    
    const {userId, backgroundImage} = req.body;
    const newBackground = await Background.findOne({
        where: {userId}
    });
    
    newBackground.set({backgroundImage});
    await newBackground.save();
    res.status(200).json(newBackground);
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
}

module.exports = { createUser, getUsers , loginUser, logOutUser, getUserById, updateUser, filterUserByNameOrEmail, userResetPasswordHandler, putBackground};


