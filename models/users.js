const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      maxlength: 64,
    },
    name: { type: String, default: "", required: false, maxlength: 32 },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
      required: true,
    },
    waterRate: {
      type: Number,
      min: 1,
      max: 15000,
      default: 2000,
      required: true,
    },

    signin: Boolean,
    token: { type: String },
    avatarURL: { type: String },
    lockedTokens: [{ token: String, dateLock: Date }],
  },
  { versionKey: false, timestamps: true }
);

// const joiSignupSchema = Joi.object({
//   user: Joi.string().required(),
//   email: Joi.string().required(),
//   password: Joi.string().min(6).required(),
//   gender: Joi.string().valid("male", "female"),
// });

// JOI

const joiSignupSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).max(64).required(),
});

const joiSigninSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).max(64).required(),
  gender: Joi.string().valid("male", "female"),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiSignupSchema,
  joiSigninSchema,
};
