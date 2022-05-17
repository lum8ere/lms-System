const Router = require("express");

const userRouter = require("./userRouter");
const objectRouter = require("./objectRouter");
const subobject = require("./subobjectRouter");
const groupRouter = require("./groupRouter");
const directionsRouter = require("./directionRouter");
const filesRouter = require("./filesRouter");

const router = new Router();

router.use("/user", userRouter);
router.use("/object", objectRouter);
router.use("/subobject", subobject);
router.use("/group", groupRouter);
router.use("/directions", directionsRouter);
router.use("/files", filesRouter);

module.exports = router;
