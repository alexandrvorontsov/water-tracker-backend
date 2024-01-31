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
  ctrlWrapper(ctrl.addWaterValueUsed)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.delWaterValueUsed));

router.patch("/:id", authenticate, ctrlWrapper(ctrl.updateWaterValueUsed));

module.exports = router;

// todayWaterValueUsed;
