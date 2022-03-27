const { Router } = require('express');
const useController = require('./controller');

const router = Router();
// /api/use/
router.post('/:modelName', useController.create);
router.get('/one/:modelName', useController.getOne);
router.get('/all/:modelName', useController.getAll);
router.patch('/:modelName', useController.update);
router.delete('/:modelName', useController.remove);

module.exports = router