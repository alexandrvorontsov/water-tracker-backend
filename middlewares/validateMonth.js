const { HttpError } = require("../helpers");

const validateMonth = (req, res, next) => {
  const { date } = req.params;

  if (date !== undefined) {
    const monthDate = /^\d{4}-\d{2}-\d{2}$/.test(date);

    if (isNaN(monthDate)) {
      return next(HttpError(400, "Invalid date format. Use 'YYYY-MM-DD'."));
    }
    req.filter = { ...req.filter, month: monthDate };
  }

  next();
};

module.exports = validateMonth;
