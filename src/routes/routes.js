const express= require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.list);
router.get('/index.html', indexController.list);
router.get('/index.html/signout', indexController.signout);
router.post('/news/save', indexController.news);
module.exports=router;

const iniciarsesionController = require('../controllers/iniciarsesionController');
router.get('/iniciarsesion.html', iniciarsesionController.list);
router.post('/login', iniciarsesionController.login);
router.post('/news/save', iniciarsesionController.news);

const checkoutController = require('../controllers/checkoutController');
router.get('/checkout.html', checkoutController.list);
router.post('/check', checkoutController.check);
router.post('/news/save', checkoutController.news);

const regaloController = require('../controllers/regaloController');
router.get('/regalo.html', regaloController.list);
router.post('/news/save', regaloController.news);

const continuarController = require('../controllers/continuarController');
router.get('/continuar.html', continuarController.list);
router.post('/news/save', continuarController.news);

const devolucionesController = require('../controllers/devolucionesController');
router.get('/devoluciones.html', devolucionesController.list);
router.post('/cantidad', devolucionesController.cantidad);
router.post('/news/save', devolucionesController.news);

const enviadoController = require('../controllers/enviadoController');
router.get('/enviado.html', enviadoController.list);
router.post('/news/save', enviadoController.news);

const promoController = require('../controllers/promoController');
router.get('/promo.html', promoController.list);
router.post('/news/save', promoController.news);

const test1Controller = require('../controllers/test1Controller');
router.get('/test1.html', test1Controller.list);
router.post('/test/save', test1Controller.test);
router.post('/news/save', test1Controller.news);

const registroController = require('../controllers/registroController');
router.get('/registro.html', registroController.list);
router.post('/reg/save', registroController.reg);
router.post('/news/save', registroController.news);

const terminosController = require('../controllers/terminosController');
router.get('/terminos.html', terminosController.list);
router.post('/news/save', terminosController.news);

const privacidadController = require('../controllers/privacidadController');
router.get('/privacidad.html', privacidadController.list);
router.post('/news/save', privacidadController.news);

const contactoController = require('../controllers/contactoController');
router.get('/contacto.html', contactoController.list);
router.post('/add/save', contactoController.add);
router.post('/news/save', contactoController.news);

const faqController = require('../controllers/faqController');
router.get('/faq.html', faqController.list);
router.post('/news/save', faqController.news);

const cancelarController = require('../controllers/cancelarController');
router.get('/cancelar.html', cancelarController.list);
router.post('/news/save', cancelarController.news);

const terminadoController = require('../controllers/terminadoController');
router.get('/terminado.html', terminadoController.list);
router.post('/news/save', terminadoController.news);