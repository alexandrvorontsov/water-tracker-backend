const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateUserInfo = async (req, res) => {
  const { email, name, gender } = req.body;
  const { _id } = req.user;
  const updatedUser = { email, name };

  if (gender) {
    updatedUser.gender = gender;
  }

  const updUser = await User.findByIdAndUpdate(_id, updatedUser, {
    new: true,
  });

  if (!updUser) {
    throw HttpError(404, "User not found");
  }

  const response = {
    message: "User updated successfully",
    user: {
      email: updUser.email,
      name: updUser.name,
      gender: updUser.gender,
    },
  };

  res.status(200).json(response);
};

module.exports = updateUserInfo;