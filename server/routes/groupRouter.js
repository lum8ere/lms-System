const Router = require('express');
const router = new Router();

const GroupController = require('../controllers/groupController');
const CheckRole = require("../middleware/checkRoleMiddleware");

router.post('/', CheckRole, GroupController.create)
// router.post('/', GroupController.create)
router.get('/', GroupController.get)

module.exports = router;