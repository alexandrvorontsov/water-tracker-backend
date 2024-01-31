const express = require("express");
const { authenticate, ctrlWrapper } = require("../../middlewares");

const { water: ctrl } = require("../../controllers");
// const { joiWaterAddSchema } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.todayWaterValueUsed));

module.exports = router;
