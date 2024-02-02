const newDay = (array) => {
  return array.reduce((acc, obj) => {
    const date = new Date(obj.date);
    date.setHours(0, 0, 0, 0);

    const key = date.toISOString();

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return acc;
  }, {});
};

module.exports = newDay;
