// const bcryptjs = require("bcryptjs");
const { ctrlWrapper } = require("../helpers");

const getCurrent = (req, res) => {}; // req.user toObject
const updateUserInfo = async (req, res) => {};
const updateAvatarUser = async (req, res) => {};

// toObject

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  updateAvatarUser: ctrlWrapper(updateAvatarUser),
  updateUserInfo: ctrlWrapper(updateUserInfo),
};
