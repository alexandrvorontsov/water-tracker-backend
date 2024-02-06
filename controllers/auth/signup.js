const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/users");
const { HttpError } = require("../../helpers");

const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, `User with ${email} alreddy exist`);
  }

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

  await User.findByIdAndUpdate(_id, { token });

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
