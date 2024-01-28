const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    userName: { type: String, required: true, maxlength: 32 },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      maxlength: 64,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    waterRate: {
      type: Number,
      min: 1,
      max: 15000,
      default: 1500,
    },
    avatarURL: { type: String, required: true },

    token: { type: String, default: null },
    verify: { type: Boolean, default: false },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },

  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  gender: Joi.string().valid("male", "female"),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
};
