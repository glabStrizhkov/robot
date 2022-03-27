const { Router } = require('express');

const router = Router();
router.use('/use', require('./use'));
router.use('/dev', require('./dev'));

module.exports = router;