const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      regExp: emailRegExp,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      maxlength: 64,
    },
    name: { type: String, required: false, maxlength: 32 },
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
    token: { type: String },
    avatarURL: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const joiSignupSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().min(8).max(64).required(),
});

const joiSigninSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().min(8).max(64).required(),
});

const joiUserSchema = Joi.object({
  name: Joi.string().max(32),
  email: Joi.string().email().pattern(emailRegExp),
  gender: Joi.string().valid("male", "female"),
  oldPassword: Joi.string().min(8).max(64),
  newPassword: Joi.string().min(8).max(64),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiSignupSchema,
  joiSigninSchema,
  joiUserSchema,
};
