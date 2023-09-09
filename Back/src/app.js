const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require ('cors');
const routerPf = require('./routes/index.js');
const cloudinary = require('cloudinary').v2;
const {CLOUD_NAME, API_KEY, API_SECRET} = process.env

console.log(CLOUD_NAME, API_KEY, API_SECRET);
cloudinary.config({
    cloud_name:CLOUD_NAME,
    api_key:API_KEY,
    api_secret:API_SECRET
  });

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' })); 
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev')); 

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
