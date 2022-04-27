const Router = require("express");
const router = new Router();

const ObjectController = require("../controllers/objectController");
const CheckRole = require("../middleware/checkRoleMiddleware");

router.post("/", CheckRole, ObjectController.create);
router.get("/", ObjectController.get);
router.get("/:id", ObjectController.getOne);

module.exports = router;
