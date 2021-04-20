import express from 'express';
import router from './routes/index.js';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({path:'variables.env'})

const app = express();


//conectar a db
conectarDB();

//req = lo que uno envia, res = lo que express nos responde

//habilitar pug

app.set('view engine', 'pug');

//obtener anio actual

app.use((req, res, next)=>{
    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio= "Travel to Kalm"
   return next();
})
//agregar body parser para leer data 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//definir carpeta publica

app.use(express.static('public'));

//router

app.use('/', router);

//port and host
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000
app.listen(port, host)
