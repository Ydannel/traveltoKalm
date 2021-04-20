import mongoose from 'mongoose';

const Testimonio = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    mensaje: {
        type: String,
        required: true,
        trim: true
    },
});

export default mongoose.model('testimonios', Testimonio);