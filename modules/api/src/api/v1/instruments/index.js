const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();
router.post('/add', controllers.addInstrument);
router.get('/get/:id', controllers.getInstrument);
router.get('/get', controllers.getAllInstruments);
router.get('/connect/:id', controllers.connectInstrument);
router.get('/disconnect/:id', controllers.disconnectInstrument);
router.patch('/update/:id', controllers.updateInstrument);
router.delete('/remove/:id', controllers.removeInstrument);

module.exports = router;