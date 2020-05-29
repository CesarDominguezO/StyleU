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

//Para entender datos de los formularios
app.use(express.urlencoded({extended:false}));


//routes (secciones del servidor)
app.use(require('./routes/routes'));

//static files
app.use(express.static(path.join(__dirname,'public')))

app.listen (app.get('port'),() => {
    console.log('server on port');
});
