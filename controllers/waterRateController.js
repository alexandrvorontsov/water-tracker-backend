const User = require("..models/");
const { ctrlWrapper } = require("../helpers");
const { HttpError } = require("../helpers");

const updateWaterRateUser = async (req, res) => {
  const { waterRate } = req.body;
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { waterRate });
  if (!user) throw HttpError(404, "Not found");
  res.status(200).json({
    waterRate,
  });
};

module.exports = { updateWaterRateUser: ctrlWrapper(updateWaterRateUser) };
