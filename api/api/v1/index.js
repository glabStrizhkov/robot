const { Router } = require('express');

const router = Router();
router.use('/connector', require('./connector/router'))

module.exports = router;