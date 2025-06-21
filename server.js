require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const obraRoutes = require('./routes/obraRoutes');
const fiscalizacaoRoutes = require('./routes/fiscalizacaoRoutes');

const app = express();

// Conectar DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rotas
app.use('/api/obras', obraRoutes);
app.use('/api/fiscalizacoes', fiscalizacaoRoutes);

// Rota teste
app.get('/', (req, res) => {
    res.send('API de Cadastro de Obras funcionando!');
});

// Start servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
