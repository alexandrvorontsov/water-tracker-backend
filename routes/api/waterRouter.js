const express = require("express");
const { waterRateController } = require("../../controllers/waterController");
// const { authenticate } = require("../../middlewares");

const waterRateRouter = express.Router();

// POST /
waterRateRouter.patch("/", waterRateController.updateWaterRateUser);

module.exports = { waterRateRouter };
