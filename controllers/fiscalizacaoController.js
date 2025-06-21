const Fiscalizacao = require('../models/Fiscalizacao');

exports.createFiscalizacao = async (req, res) => {
    try {
        const fiscalizacao = await Fiscalizacao.create(req.body);
        res.status(201).json(fiscalizacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFiscalizacoes = async (req, res) => {
    try {
        const fiscalizacoes = await Fiscalizacao.find().populate('obra');
        res.json(fiscalizacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFiscalizacaoById = async (req, res) => {
    try {
        const fiscalizacao = await Fiscalizacao.findById(req.params.id).populate('obra');
        if (!fiscalizacao) return res.status(404).json({ error: 'Fiscalização não encontrada' });
        res.json(fiscalizacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFiscalizacao = async (req, res) => {
    try {
        const fiscalizacao = await Fiscalizacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!fiscalizacao) return res.status(404).json({ error: 'Fiscalização não encontrada' });
        res.json(fiscalizacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFiscalizacao = async (req, res) => {
    try {
        await Fiscalizacao.findByIdAndDelete(req.params.id);
        res.json({ message: 'Fiscalização deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
