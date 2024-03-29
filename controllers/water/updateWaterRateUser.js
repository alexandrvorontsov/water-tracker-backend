const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateWaterRateUser = async (req, res) => {
  const {
    body: { waterRate },
    user: { _id },
  } = req;

  const user = await User.findByIdAndUpdate(_id, { waterRate });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  res.status(200).json({ waterRate });
};

module.exports = updateWaterRateUser;
