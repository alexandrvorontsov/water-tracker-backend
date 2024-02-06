const { WaterInput } = require("../../models");
const { calc, monthCalendar, newDay } = require("../../helpers");

const updateWaterVolumeUsed = async (req, res) => {
  const { _id: owner, waterRate } = req.user;
  const { monthNum } = req.params;

  const dateString = monthNum;
  const dateObject = new Date(dateString);
  const monthNumber = dateObject.getMonth() + 1;
  const adjustMonth = parseInt(monthNumber) - 1;

  const start = new Date();
  start.setMonth(adjustMonth, 1);
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setMonth(adjustMonth + 1, 0);
  end.setHours(23, 59, 59, 999);

  const waterInputsForThisMonth = await WaterInput.find({
    date: {
      $gte: start,
      $lte: end,
    },
    owner,
  });

  const filterArray = Object.values(newDay(waterInputsForThisMonth));

  const result = filterArray.map((array) => {
    const formatDate = monthCalendar(array[0].date);
    const literWaterRate = waterRate / 1000;
    const percentage = calc(array, waterRate);

    return {
      data: formatDate,
      waterRate: literWaterRate,
      percentage,
      servings: array.length,
    };
  });

  res.json(result);
};

module.exports = updateWaterVolumeUsed;
