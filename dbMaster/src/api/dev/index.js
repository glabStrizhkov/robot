const { Router } = require('express');
const devController = require('./controller');

const router = Router();
// /api/dev/createMM
router.post('/createMM', devController.createMM);

module.exports = router