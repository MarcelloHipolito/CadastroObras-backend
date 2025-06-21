const Obra = require('../models/Obra');
const Fiscalizacao = require('../models/Fiscalizacao');
const nodemailer = require('nodemailer');

exports.createObra = async (req, res) => {
    try {
        const obra = await Obra.create(req.body);
        res.status(201).json(obra);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getObras = async (req, res) => {
    try {
        const obras = await Obra.find();
        res.json(obras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getObraById = async (req, res) => {
    try {
        const obra = await Obra.findById(req.params.id);
        if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });
        res.json(obra);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateObra = async (req, res) => {
    try {
        const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });
        res.json(obra);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteObra = async (req, res) => {
    try {
        await Obra.findByIdAndDelete(req.params.id);
        res.json({ message: 'Obra deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFiscalizacoesPorObra = async (req, res) => {
    try {
        const fiscalizacoes = await Fiscalizacao.find({ obra: req.params.id });
        res.json(fiscalizacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.enviarObraPorEmail = async (req, res) => {
    try {
        const obra = await Obra.findById(req.params.id);
        if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });

        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: `Detalhes da Obra: ${obra.nome}`,
            text: `
                Nome: ${obra.nome}
                Responsável: ${obra.responsavel}
                Descrição: ${obra.descricao}
                Data Início: ${obra.dataInicio}
                Data Fim: ${obra.dataFim}
                Localização: Latitude ${obra.localizacao.latitude}, Longitude ${obra.localizacao.longitude}
            `
        });

        res.json({ message: 'Email enviado', info });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
