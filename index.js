import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'})

const app = express();


//conectar a db

db.authenticate()
        .then(()=> console.log('db conectada'))
        .catch( error => console.log(error))

//const port = process.env.PORT || 4000;
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
