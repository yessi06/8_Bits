require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
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
const { User, Game, CartItem, Favorites, Gender, Licenses, Order, Post, Shopping, Reviews } = sequelize.models;

//Relaciones de usuario
User.belongsToMany(Game, { through: "user_game" });

// Relaciones de games
Game.belongsToMany(User, { through: "game_user_reviews" });
Game.belongsToMany(Gender, { through: 'game_user_reviews' });
Game.belongsToMany(Reviews, { through: 'game_user_reviews' });

// Relaciones de Favorites
User.belongsToMany (Favorites, {through: 'favorites_user_game'});
Favorites.belongsToMany (User, {through: 'favorites_user_game'});
Game.belongsToMany (Favorites, {through: 'favorites_user_game'});
Favorites.belongsToMany (Game, {through: 'favorites_user_game'});

// Relaciones de Reviews
User.belongsToMany (Reviews, {through: 'user_reviews_game'});
Reviews.belongsToMany (User, {through: 'user_reviews_game'});
Game.belongsToMany (Reviews, {through: 'user_reviews_game'});
Reviews.hasOne (Game, {through: 'user_reviews_game'});

// Relaciones de Licenses
Game.belongsToMany (Licenses, {through: 'licenses_game'});
Licenses.belongsToMany (Game, {through: 'licenses_game'});

// Relaciones de Post
User.belongsToMany (Post, {through: 'user_post'});
Post.hasOne (User, {through: 'user_post'});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,
};


