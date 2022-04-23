const { Router } = require('express');

const router = Router();
router.use('/instruments', require('./instruments'));

module.exports = router;