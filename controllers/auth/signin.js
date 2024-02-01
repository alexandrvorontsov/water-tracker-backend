// const { Unauthorized } = require("http-errors");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../../models/users");
const { HttpError } = require("../../helpers/HttpErrors");
const { JWT_SECRET } = process.env;

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const avatar = gravatar.url(email);
  const { _id, name, avatarURL = avatar, gender, waterRate } = user;
  const payload = {
    id: _id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  await User.findByIdAndUpdate(_id, { token });

  res.status(200).json({
    token,
    user: {
      email,
      name,
      gender,
      waterRate,
      avatarURL,
    },
  });
};

module.exports = signin;
