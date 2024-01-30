// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { userName = "", email, gender, avatarURL, waterRate } = req.user;
  res.json({ userName, email, gender, avatarURL, waterRate });
};

module.exports = getCurrent;
