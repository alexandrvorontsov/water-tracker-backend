const express = require("express");
const {
  authenticate,
  validateBody,
  ctrlWrapper,
} = require("../../middlewares");

const { water: ctrl } = require("../../controllers");
const { joiWaterAddSchema } = require("../../models");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(joiWaterAddSchema),
  ctrlWrapper(ctrl.addWaterVolumeUsed)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.delWaterVolumeUsed));

router.patch("/:id", authenticate, ctrlWrapper(ctrl.updateWaterVolumeUsed));

module.exports = router;

// todayWaterVolumeUsed;
