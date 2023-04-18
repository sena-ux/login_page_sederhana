// Definisi Library yang digunakan
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

// Definisi lokasi file router
const loginRoutes = require('./src/routes/route-login');
const registerRoutes = require('./src/routes/route-register');
const appRoutes = require('./src/routes/route-app');
const konsultasirouter = require('./src/routes/konsultasi');
const permisionRouter = require('./src/routes/permision')
const sharingRouter = require('./src/routes/sharing');
const editProfileController= require('./src/routes/edit-product')

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 't@1k0ch3ng',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: false
    },
}))
app.use(flash());

// Setting folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

// Gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);
app.use('/konsultasi', konsultasirouter);
app.use('/permision', permisionRouter);
app.use('/sharing', sharingRouter);
app.use('/', editProfileController);


// Gunakan port server
app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : '+5050);
});
