const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const updateUserInfo = async (req, res) => {
  const { email, name, gender, oldPassword, newPassword } = req.body;
  const { _id, avatarURL } = req.user;
  const user = { email, name };

  let hashedNewPassword;

  if (oldPassword && newPassword) {
    const user = await User.findById(_id);
    if (!user) {
      throw HttpError(404, "User not found");
    }

    const { password } = user;

    if (oldPassword === newPassword) {
      throw HttpError(
        409,
        "The new password must not be the same as the old one"
      );
    }

    const comparedPassword = await bcrypt.compare(oldPassword, password);

    if (!comparedPassword) {
      throw HttpError(409, "The current password is not correct");
    }

    hashedNewPassword = await bcrypt.hash(newPassword, 10);
  } else if (newPassword) {
    throw HttpError(
      400,
      "To change the password, provide both old password and new password"
    );
  }

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { ...req.body, password: hashedNewPassword },
    { new: true }
  );

  if (gender) {
    user.gender = gender;
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
      avatarURL,
    },
  };

  res.status(200).json(response);
};

module.exports = updateUserInfo;
