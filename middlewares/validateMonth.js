const { HttpError } = require("../helpers");

const validateMonth = (req, res, next) => {
  const { month } = req.params;

  if (month !== undefined) {
    const monthNumber = Number(month);

    if (isNaN(monthNumber)) {
      return next(HttpError(400, "Month must be a number."));
    }
    req.filter = { ...req.filter, month: monthNumber };
  }

  next();
};

module.exports = validateMonth;
