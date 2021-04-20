import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const viajesSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: String,
        required: true,
        trim: true
    },
    fecha_ida: {
        type: Date,
    },
    fecha_vuelta: {
        type: Date,
    },
    imagen: {
        type: String,
       
    },
    descripcion: {
        type: String,
       
    },
    disponibles: {
        type: String,
       
    },
    slug: {
        type: String,
       
    }
});

export default  mongoose.model('viajes', viajesSchema);
