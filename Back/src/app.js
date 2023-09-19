const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require ('cors');
const routerPf = require('./routes/index.js');
const cloudinary = require('cloudinary').v2;
const {CLOUD_NAME, API_KEY, API_SECRET} = process.env
const session = require('express-session');
const passport = require('./passportConfig.js');

cloudinary.config({
    cloud_name:CLOUD_NAME,
    api_key:API_KEY,
    api_secret:API_SECRET
  });

require('./db.js');

const server = express();

server.name = 'API';

const corsOptions = {
    origin: ['http://localhost:3000', 'https://8-bits-front.vercel.app','http://127.0.0.1:3000'],
    credentials: true
}

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' })); 
server.use(cookieParser('mi_secreto', {
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  sameSite: 'None',
  secure: true, 
}));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors(corsOptions));
server.use(morgan('dev')); 

server.use(session({
    secret: '8-bits',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // Duración de la cookie de sesión en milisegundos (7 días)
        sameSite: 'None', // Esto puede mantenerse en 'None' solo en localhost para pruebas
        secure: true,
    }
}));

server.use(passport.initialize());
server.use(passport.session());
//Aqui van las rutas
server.use(routerPf);


server.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = server;
