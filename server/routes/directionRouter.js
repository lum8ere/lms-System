const Router = require('express');
const router = new Router();

const DirectionController = require('../controllers/directionController');
const CheckRole = require("../middleware/checkRoleMiddleware");

router.post('/', CheckRole, DirectionController.create)
router.get('/', DirectionController.get)

module.exports = router;