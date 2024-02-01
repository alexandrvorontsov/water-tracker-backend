// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { user = "", email, gender, avatarURL, waterRate } = req.user;

  res.json({ user, email, gender, avatarURL, waterRate });
};

module.exports = getCurrent;
