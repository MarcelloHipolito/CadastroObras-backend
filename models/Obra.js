const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    responsavel: { type: String, required: true },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date },
    localizacao: {
        latitude: { type: String },
        longitude: { type: String }
    },
    endereco: { type: String },
    descricao: { type: String },
    foto: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Obra', ObraSchema);
