import {Testimonio} from '../Models/testimonios.js';

const guardarTestimonio =  async (req, res) =>{

    console.log(req.body);

    const errores = []
    //validacion 
    const {nombre, correo, mensaje } = req.body;

    if(nombre.trim() === ''){
            errores.push({mensaje: 'el nombre esta vacio'});
    }
    if (correo.trim() ==='') {
        errores.push({mensaje:'El correo esta vacio '});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje:'el mensaje esta vacio'});
    }
    if (errores.length > 0 ) {

        

        //mostrar los errores
        res.render('testimonios', {
            errores,
            nombre,
            correo,
            mensaje
           
        })
    }
    
    else{
        //almacenar
        try {
            await Testimonio.create({
                nombre,
                correo, 
                mensaje
            });
            res.redirect('/testimonios')
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonio
}
