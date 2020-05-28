const express= require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/', indexController.list);
router.get('/index.html', indexController.list);
module.exports=router;

const iniciarsesionController = require('../controllers/iniciarsesionController');
router.get('/iniciarsesion.html', iniciarsesionController.list);

const regaloController = require('../controllers/regaloController');
router.get('/regalo.html', regaloController.list);

const regalofinController = require('../controllers/regalofinController');
router.get('/regalofin.html', regalofinController.list);

const regaloofController = require('../controllers/regaloofController');
router.get('/regaloof.html', regaloofController.list);

const continuarController = require('../controllers/continuarController');
router.get('/continuar.html', continuarController.list);

const enviadoController = require('../controllers/enviadoController');
router.get('/enviado.html', enviadoController.list);

const promoController = require('../controllers/promoController');
router.get('/promo.html', promoController.list);

const test1Controller = require('../controllers/test1Controller');
router.get('/test1.html', test1Controller.list);
router.post('/add', test1Controller.save);

const test2Controller = require('../controllers/test2Controller');
router.get('/test2.html', test2Controller.list);

const test3Controller = require('../controllers/test3Controller');
router.get('/test3.html', test3Controller.list);

const test4Controller = require('../controllers/test4Controller');
router.get('/test4.html', test4Controller.list);

const test5Controller = require('../controllers/test5Controller');
router.get('/test5.html', test5Controller.list);

const test6Controller = require('../controllers/test6Controller');
router.get('/test6.html', test6Controller.list);

const test7Controller = require('../controllers/test7Controller');
router.get('/test7.html', test7Controller.list);

const test8Controller = require('../controllers/test8Controller');
router.get('/test8.html', test8Controller.list);

const test9Controller = require('../controllers/test9Controller');
router.get('/test9.html', test9Controller.list);

const registroController = require('../controllers/registroController');
router.get('/registro.html', registroController.list);