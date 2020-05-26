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