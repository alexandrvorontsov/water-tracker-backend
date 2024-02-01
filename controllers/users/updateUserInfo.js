// const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  const { email, name, gender } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { email, name, gender },
    { new: true }
  );

  res.status(200).json({
    msg: "Success!",
    user: updatedUser,
  });
};

module.exports = updateUserInfo;
