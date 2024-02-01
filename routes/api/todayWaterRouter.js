const express = require("express");
const { authenticate, ctrlWrapper } = require("../../middlewares");

const { water: ctrl } = require("../../controllers");
// const { joiWaterAddSchema } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.todayWaterVolumeUsed));

module.exports = router;
