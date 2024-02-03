const { WaterInput } = require("../../models");
const { calc } = require("../../helpers");

// getToday
const todayWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner, waterRate },
  } = req;

  const currentDate = new Date();
  const start = new Date(currentDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date(currentDate);
  end.setHours(23, 59, 59, 999);

  const dayPortions = await WaterInput.find({
    date: {
      $gte: start,
      $lte: end,
    },
    owner,
  }).select("-createdAt -updatedAt");

  const percentage = calc(dayPortions, waterRate);

  res.json({ dayPortions, percentage });
};

module.exports = todayWaterVolumeUsed;
