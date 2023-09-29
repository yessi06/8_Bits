require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const cloudinary = require ('cloudinary').v2;
const path = require('path');

const {
  DB_USER, 
  DB_PASSWORD, 
  DB_HOST,
} = process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bits_2r2h`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  
  dialect: 'postgres',
  dialectOptions: {
    ssl: { 
      require: true, // Requiere SSL/TLS
      rejectUnauthorized: false // Permite conexiones con certificados no válidos (cuidado en producción)
    }
  }
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Game, Favorites, Genre, Licenses, Payment, Post, Shopping, Reviews, SupportedPlatform, UserPassword} = sequelize.models;

// Relaciones de games
Game.belongsToMany(Genre, { through: 'game_genre' });
Genre.belongsToMany(Game, { through: 'game_genre' });8

Game.belongsToMany(SupportedPlatform, { through: 'game_supportedPlatform' });
SupportedPlatform.belongsToMany(Game, { through: 'game_supportedPlatform' });

//Relaciones de shopping
Shopping.belongsToMany (User, { through: 'shopping_user' });
User.belongsToMany (Shopping, { through: 'shopping_user' });

Shopping.belongsToMany (Game, { through: 'shopping_game' });
Game.belongsToMany (Shopping, { through: 'shopping_game' });

//Relaciones de payment
Payment.belongsTo(User, {
  foreignKey: 'idUser', 
  targetKey: 'id',
  as: 'user' 
});
User.hasMany(Payment, {
  foreignKey: 'idUser',
  sourceKey: 'id',
  as: 'payments'
});

Payment.belongsTo(Game, {
  foreignKey: 'idGame', 
  targetKey: 'id',
  as: 'game' 
});
Game.hasMany(Payment, {
  foreignKey: 'idGame',
  sourceKey: 'id',
  as: 'payments'
});


//Relaciones de Reviews
User.hasMany(Reviews, {
  foreignKey:'userId',
  sourceKey: 'id'
});
Reviews.belongsTo(User, {
  foreignKey:'userId',
  targetKey: 'id'
});

Game.hasMany(Reviews, {
  foreignKey: 'gameId',
  sourceKey: 'id'
});
Reviews.belongsTo(Game, {
  foreignKey: 'gameId',
  targetKey: 'id'
});

//---------------

User.hasMany(UserPassword,{
  foreignKey: 'userId'
});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,
};


