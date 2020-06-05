const express = require ('express');
const morgan = require ('morgan');
const mysql =require ('mysql');
const myConnection = require('express-myconnection');
const path =require ('path');

const app = express();
//https://www.npmjs.com/package/express-session
const session = require('express-session');
//https://www.npmjs.com/package/express-mysql-session
const MySQLTest = require('express-mysql-session')(session);
//https://github.com/visionmedia/express-messages
var flash = require('connect-flash');

const dbCon={
    host: 'localhost',
    user: 'root', 
    password: '',
    port: 3306,
    database: 'StyleU'
}

const sessionTest = new MySQLTest(dbCon);

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile); //usar archivos html usando ejs

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, dbCon, 'single'));
app.use(session({
    secret: 's3cur3',
    store: sessionTest,
    resave: false,
    saveUninitialized: true //true para empezar a guardar información
}));
app.use(function(req, res, next) {
    res.locals.test = req.session.test; //utilizar la información del carrito en toda la navegación
    console.log(res.locals.test)
    next();
  });

app.use(flash());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res); //mensajes que quisieramos mostrar
    console.log(res.locals.messages);
    next();
});

app.use(function(req, res, next) {
    res.locals.auth = req.session.auth; //utilizar la información del carrito en toda la navegación
    console.log(res.locals.auth);
    next();
  });

app.use(function(req, res, next) {
    res.locals.check = req.session.check; //utilizar la información del carrito en toda la navegación
    console.log(res.locals.check);
    next();
  });

  app.use(function(req, res, next) {
    res.locals.dev = req.session.dev; //utilizar la información del carrito en toda la navegación
    console.log(res.locals.dev);
    next();
  });

  app.use(function(req, res, next) {
    res.locals.cantidad = req.session.cantidad; //utilizar la información del carrito en toda la navegación
    console.log(res.locals.cantidad);
    next();
  });

//Para entender datos de los formularios
app.use(express.urlencoded({extended:false}));


//routes (secciones del servidor)
app.use(require('./routes/routes'));

//static files
app.use(express.static(path.join(__dirname,'public')))

app.listen (app.get('port'),() => {
    console.log('server on port');
});
