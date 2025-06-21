const mongoose = require('mongoose');

const FiscalizacaoSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    status: { type: String, required: true },
    observacoes: { type: String },
    localizacao: {
        latitude: { type: String },
        longitude: { type: String }
    },
    foto: { type: String }, 
    obra: { type: mongoose.Schema.Types.ObjectId, ref: 'Obra', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Fiscalizacao', FiscalizacaoSchema);
