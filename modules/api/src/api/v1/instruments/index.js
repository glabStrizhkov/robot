const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();
router.post('/add', controllers.addInstrument);
router.get('/get/byObj', controllers.getInstrument);
router.get('/get', controllers.getAllInstruments);
router.get('/connect/:instrumentId', controllers.connectInstrument);
router.get('/disconnect/:instrumentId', controllers.disconnectInstrument);
router.patch('/update/:instrumentId', controllers.updateInstrument);
router.delete('/remove/:instrumentId', controllers.removeInstrument);

module.exports = router;