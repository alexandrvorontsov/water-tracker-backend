// const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { User } = require("../../models/users");
const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  const { password, email } = req.body;

  req.body.password = await bcrypt.hash(password, 10);

  const {
    _id,
    name = "",
    gender,
    waterRate,
    avatarURL = "",
  } = await User.create(req.body);

  const payload = {
    id: _id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  res.status(201).json({
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

module.exports = signup;
