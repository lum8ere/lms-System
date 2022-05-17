const Router = require("express");
const router = new Router();

const SubObjectController = require("../controllers/subjectController");
const CheckRole = require("../middleware/checkRoleMiddleware");

router.post("/", CheckRole, SubObjectController.create);
// router.post("/", SubObjectController.create);
router.get("/", SubObjectController.get);
router.get("/:id", SubObjectController.getOne);

module.exports = router;
