import {Viaje} from '../Models/viaje.js';
import {Testimonio} from '../Models/testimonios.js';


const pagInicio = async (req, res)=>{
    const promiseDB = []
    promiseDB.push( await Viaje.findAll({limit: 3}))
    promiseDB.push( await Testimonio.findAll({limit: 3}))
    //bd a viajes 3 
    try {
        const resultado = await Promise.all(promiseDB)
        
        res.render('inicio', {clase: 'home', viajes : resultado[0], testimonios : resultado[1]})
    } catch (error) {
        
    }
   }

const pagNosotros = (req, res)=>{ res.render('nosotros')}

const pagViajes = async (req, res)=>{
    //consultar DB
    const viajes = await Viaje.findAll();
    console.log(viajes);

   
    res.render('viajes', {
        viajes
    })}

const pagDetallleViajes = async (req, res)=>{

    const {viaje} = req.params;

    try {
        const viajeR = await Viaje.findOne({where: {slug: viaje}})//trae uno
        res.render('viaje', {viajeR})
        
    } catch (error) {
        
    }
  }

const pagTestimonio = async (req, res)=>{
    try {
        const testimonios = await Testimonio.findAll()
        res.render('testimonios', {testimonios})
    } catch (error) {
        
    }    
   }

export { 
    pagInicio,
    pagNosotros,
    pagViajes,
    pagTestimonio,
    pagDetallleViajes

}