const { WaterInput } = require("../../models");
const { calcWater } = require("../../helpers");

const todayWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner, waterRate },
  } = req;

  console.log({ _id: owner, waterRate });
  const currentDate = new Date();
  const startDay = new Date(currentDate);
  startDay.setUTCHours(0, 0, 0, 0);

  console.log(startDay);

  const endDay = new Date(currentDate);
  endDay.setUTCHours(23, 59, 59, 0);

  console.log(endDay);

  const waterInputToday = await WaterInput.find({
    date: {
      $gte: startDay,
      $lte: endDay,
    },
    owner,
  }).select("-createdAt -updatedAt");

  console.log({
    $gte: startDay,
    $lte: endDay,
  });

  const drinksTodayPercent = calcWater(waterInputToday, waterRate);

  res.json({ waterInputToday, drinksTodayPercent });
};

module.exports = todayWaterVolumeUsed;
