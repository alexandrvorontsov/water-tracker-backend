const { Schema, model } = require("mongoose");
const Joi = require("joi");

// waterinput
const waterAddSchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    waterVolume: {
      type: Number,
      min: 1,
      max: 5000,
      required: [true],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true],
    },
  },
  { versionKey: false, timestamps: true }
);

const WaterInput = model("waterInput", waterAddSchema);

// Joi

const joiWaterRateSchema = Joi.object({
  waterRate: Joi.number().min(1).max(15000).required(),
});

const joiWaterAddSchema = Joi.object({
  waterVolume: Joi.number().min(1).max(5000).required(),
  date: Joi.date().required(),
});

module.exports = {
  joiWaterRateSchema,
  joiWaterAddSchema,
  WaterInput,
};
