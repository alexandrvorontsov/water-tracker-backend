const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
// const jwt = require("jsonwebtoken");

const { User } = require("../../models/users");
// const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  const { userName, email, password, gender, waterRate } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  req.body.signin = true;

  await User.create({
    userName,
    email,
    password: hashPassword,
    avatarURL,
    gender,
    waterRate,
  });

  res.status(201).json({
    message: "New user has been created!",
    user: { email, userName, waterRate, gender, avatarURL },
  });
};

module.exports = signup;
