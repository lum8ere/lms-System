const Router = require('express');
const router = new Router();

const FileController = require('../controllers/filesController')

router.post('/', FileController.create)
router.get('/', FileController.get)
router.get('/:id')

module.exports = router;