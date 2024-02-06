const calc = (data, waterRate) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return 0; // Перевірка на валідність введених даних
  }
  const sum = data.reduce((acc, el) => acc + (el.waterVolume || 0), 0);
  const todayNormPercent =
    waterRate && waterRate !== 0 ? Math.round((sum / waterRate) * 100) : 0;
  const roundedPercentage = Math.ceil(todayNormPercent / 10) * 10;
  return roundedPercentage;
};

module.exports = calc;
