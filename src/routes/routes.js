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
router.post('/test/save', test1Controller.test);

const test3Controller = require('../controllers/test3Controller');
router.get('/test3.html', test3Controller.list);
router.post('/test3/save', test3Controller.test);

const test4Controller = require('../controllers/test4Controller');
router.get('/test4.html', test4Controller.list);
router.post('/test4/save', test4Controller.test);

const test5Controller = require('../controllers/test5Controller');
router.get('/test5.html', test5Controller.list);
router.post('/test5/save', test5Controller.test);

const test6Controller = require('../controllers/test6Controller');
router.get('/test6.html', test6Controller.list);
router.post('/test6/save', test6Controller.test);

const test7Controller = require('../controllers/test7Controller');
router.get('/test7.html', test7Controller.list);
router.post('/test7/save', test7Controller.test);

const test8Controller = require('../controllers/test8Controller');
router.get('/test8.html', test8Controller.list);
router.post('/test8/save', test8Controller.test);

const test9Controller = require('../controllers/test9Controller');
router.get('/test9.html', test9Controller.list);
router.post('/test9/save', test9Controller.test);

const registroController = require('../controllers/registroController');
router.get('/registro.html', registroController.list);
router.post('/reg/save', registroController.reg);