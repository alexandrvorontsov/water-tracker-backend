const { User } = require("../../models");

const signout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).json({ message: "signout successful", status: "No Content" });
};
module.exports = signout;
