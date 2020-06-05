const express= require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.list);
router.get('/index.html', indexController.list);
router.get('/index.html/signout', indexController.signout);
module.exports=router;

const iniciarsesionController = require('../controllers/iniciarsesionController');
router.get('/iniciarsesion.html', iniciarsesionController.list);
router.post('/login', iniciarsesionController.login);

const checkoutController = require('../controllers/checkoutController');
router.get('/checkout.html', checkoutController.list);
router.post('/check', checkoutController.check);

const regaloController = require('../controllers/regaloController');
router.get('/regalo.html', regaloController.list);

const regalofinController = require('../controllers/regalofinController');
router.get('/regalofin.html', regalofinController.list);

const regaloofController = require('../controllers/regaloofController');
router.get('/regaloof.html', regaloofController.list);

const continuarController = require('../controllers/continuarController');
router.get('/continuar.html', continuarController.list);

const devolucionesController = require('../controllers/devolucionesController');
router.get('/devoluciones.html', devolucionesController.list);
router.post('/cantidad', devolucionesController.cantidad);

const enviadoController = require('../controllers/enviadoController');
router.get('/enviado.html', enviadoController.list);

const promoController = require('../controllers/promoController');
router.get('/promo.html', promoController.list);

const test1Controller = require('../controllers/test1Controller');
router.get('/test1.html', test1Controller.list);
router.post('/test/save', test1Controller.test);

const registroController = require('../controllers/registroController');
router.get('/registro.html', registroController.list);
router.post('/reg/save', registroController.reg);

const terminosController = require('../controllers/terminosController');
router.get('/terminos.html', terminosController.list);

const privacidadController = require('../controllers/privacidadController');
router.get('/privacidad.html', privacidadController.list);