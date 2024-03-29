const express = require("express");
const {
  authenticate,
  validateMonth,
  ctrlWrapper,
} = require("../../middlewares");

const { water: ctrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/:monthNum",
  authenticate,
  validateMonth,
  ctrlWrapper(ctrl.monthWaterVolumeUsed)
);

module.exports = router;
