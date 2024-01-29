const User = require("../../models");
// const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const { HttpError } = require("../../helpers");

const updateWaterRateUser = async (req, res) => {
  const { waterRate } = req.body;
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { waterRate });
  if (!user) throw HttpError(404, "Not found");
  res.status(200).json({
    waterRate,
  });
};

// const updateWaterRateUser = async (req, res, next) => {
//   try {
//     // const { body: { waterRate }, user: { _id } } = req;
//     const { waterRate } = req.body;
//     // console.log({ waterRate });
//     const { _id } = req.user;
//     // console.log({ _id });
//     const user = await User.findByIdAndUpdate(_id, { waterRate });
//     if (!user) {
//       throw HttpError(404, "User not found");
//     }
//     res.status(200).json({ waterRate });
//   } catch (error) {
//     next(error); // Передача помилки до middleware для обробки
//   }
// };

// module.exports = { updateWaterRateUser: ctrlWrapper(updateWaterRateUser) };
module.exports = updateWaterRateUser;
