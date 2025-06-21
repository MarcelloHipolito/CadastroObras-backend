const express = require('express');
const router = express.Router();
const fiscalizacaoController = require('../controllers/fiscalizacaoController');

router.post('/', fiscalizacaoController.createFiscalizacao);
router.get('/', fiscalizacaoController.getFiscalizacoes);
router.get('/:id', fiscalizacaoController.getFiscalizacaoById);
router.put('/:id', fiscalizacaoController.updateFiscalizacao);
router.delete('/:id', fiscalizacaoController.deleteFiscalizacao);

module.exports = router;
