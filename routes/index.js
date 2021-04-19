import express from 'express';
import {pagInicio, pagNosotros, pagViajes, pagTestimonio, pagDetallleViajes} from '../controller/paginaControler.js'
import {guardarTestimonio} from '../controller/testimonioController.js'

//const express = require('express');

const router = express.Router();

router.get('/', pagInicio)


router.get('/nosotros', pagNosotros)

router.get('/viajes', pagViajes)
router.get('/viajes/:viaje', pagDetallleViajes)
router.get('/testimonios', pagTestimonio)
router.post('/testimonios', guardarTestimonio)


    export default router;

//res.render = ve una vista
//res.send ponde un mensaje
//res.json = ponde un mensaje tipo json

//h1 Travel To Kalm