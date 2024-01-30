// const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { User } = require("../../models/users");
const { JWT_SECRET } = process.env;

// const signup = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Conflict(`User with ${email} already exist`);
//   }

//   const gender = "";
//   const avatarURL = gravatar.url(email);
//   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//   await User.create({
//     userName,
//     email,
//     password: hashPassword,
//     avatarURL,
//     gender,
//     waterRate,
//   });

//   res.status(201).json({
//     message: "New user has been created!",
//     user: { email, userName, waterRate, gender, avatarURL },
//   });
// };

const signup = async (req, res, next) => {
  const { password, email } = req.body;

  req.body.password = await bcrypt.hash(password, 10);

  const {
    _id,
    userName = "",
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
      userName,
      gender,
      waterRate,
      avatarURL,
    },
  });
};

module.exports = signup;
