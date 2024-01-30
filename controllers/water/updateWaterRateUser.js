const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateWaterRateUser = async (req, res, next) => {
  try {
    const {
      body: { waterRate },
      user: { _id },
    } = req;

    // console.log({ waterRate });  // зміна значення waterRate
    // console.log({ _id });

    const user = await User.findByIdAndUpdate(_id, { waterRate });
    if (!user) {
      throw HttpError(404, "User not found");
    }
    res.status(200).json({ waterRate });
  } catch (error) {
    next(error); // Передача помилки до middleware для обробки
  }
};

module.exports = updateWaterRateUser;
