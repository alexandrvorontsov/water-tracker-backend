// const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  const { email, user, gender } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { email, user, gender },
    { new: true }
  );

  res.status(200).json({
    msg: "Success!",
    user: updatedUser,
  });
};

module.exports = updateUserInfo;
