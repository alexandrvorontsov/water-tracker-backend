// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { name = "", email, gender, avatarURL, waterRate } = req.user;
  res.json({ name, email, gender, avatarURL, waterRate });
};

module.exports = getCurrent;
