const getCurrent = require("./getCurrent");
const signup = require("../auth/signup");
const signin = require("../auth/signin");
const signout = require("../auth/signout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  getCurrent,
  signup,
  signin,
  signout,
  updateSubscription,
  updateAvatar,
};
