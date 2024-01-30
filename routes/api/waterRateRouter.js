const express = require("express");
const {
  authenticate,
  validateBody,
  ctrlWrapper,
} = require("../../middlewares");

const { water: ctrl } = require("../../controllers");
const { joiWaterRateSchema } = require("../../models");

const router = express.Router();

// router.patch(
//   "/",
//   authenticate,
//   validateBody(joiWaterRateSchema),
//   ctrlWrapper(ctrl.updateWaterRateUser)
// );

router.patch(
  "/",
  authenticate,
  validateBody(joiWaterRateSchema),
  ctrlWrapper(ctrl.updateWaterRateUser)
);

module.exports = router;
