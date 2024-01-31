// const calcWater = (data, waterRate) => {
//   const sum = data.reduce((sum, el) => sum + el.waterVolume, 0);

//   const todayNormPercent =
//     waterRate && waterRate !== 0 ? Math.round((sum / waterRate) * 100) : 0;

//   return todayNormPercent;
// };

const calcWater = (data, waterRate) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return 0; // Перевірка на валідність введених даних
  }

  const sum = data.reduce((acc, el) => acc + (el.waterVolume || 0), 0);

  const todayNormPercent =
    waterRate && waterRate !== 0 ? Math.round((sum / waterRate) * 100) : 0;

  return todayNormPercent;
};

module.export = calcWater;
