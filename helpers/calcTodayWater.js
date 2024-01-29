const calcTodayWaterPercentage = (data, waterRate) => {
  const sumOfFulfillment = data.reduce((sum, el) => sum + el.waterVolume, 0);

  const todayNorm =
    waterRate && waterRate !== 0
      ? Math.round((sumOfFulfillment / waterRate) * 100)
      : 0;

  return todayNorm;
};

module.export = calcTodayWaterPercentage;
