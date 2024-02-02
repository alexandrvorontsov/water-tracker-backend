const { WaterInput } = require("../../models");
const { calc } = require("../../helpers");

// getToday
const todayWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner, waterRate },
  } = req;

  const myTimeZone = 2;
  // const currentDate = new Date();
  const currentDate = new Date() + myTimeZone;
  // console.log(currentDate);

  const start = new Date(currentDate);
  start.setUTCHours(0, 0, 0, 0);

  const end = new Date(currentDate);
  end.setUTCHours(23, 59, 59, 0);

  const waterInputToday = await WaterInput.find({
    date: {
      $gte: start,
      $lte: end,
    },
    owner,
  }).select("-createdAt -updatedAt");

  const drinksTodayPercent = calc(waterInputToday, waterRate);

  res.json({ waterInputToday, drinksTodayPercent });
};

module.exports = todayWaterVolumeUsed;
