const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obraController');

router.post('/', obraController.createObra);
router.get('/', obraController.getObras);
router.get('/:id', obraController.getObraById);
router.put('/:id', obraController.updateObra);
router.delete('/:id', obraController.deleteObra);

router.get('/:id/fiscalizacoes', obraController.getFiscalizacoesPorObra);
router.post('/:id/enviar-email', obraController.enviarObraPorEmail);

module.exports = router;
