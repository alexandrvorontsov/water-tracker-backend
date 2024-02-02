const WaterInput = require("../../models");
const { calcWater } = require("../../helpers");

// getToday
const todayWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner, waterRate },
  } = req;

  // console.log({ _id: owner, waterRate });

  const currentDate = new Date();
  const start = new Date(currentDate);
  start.setUTCHours(0, 0, 0, 0);

  const end = new Date(currentDate);
  end.setUTCHours(23, 59, 59, 0);

  // console.log(start);
  // console.log(end);

  const waterInputToday = await WaterInput.find({
    date: {
      $gte: start,
      $lte: end,
    },
    owner,
  }).select("-createdAt -updatedAt");

  // console.log({
  //   $gte: start,
  //   $lte: end,
  // });

  const drinksTodayPercent = calcWater(waterInputToday, waterRate);

  res.json({ waterInputToday, drinksTodayPercent });
};

module.exports = todayWaterVolumeUsed;
