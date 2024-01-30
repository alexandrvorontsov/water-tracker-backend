// const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiWaterRateSchema = Joi.object({
  waterRate: Joi.number().min(1).max(15000).required(),
});

module.exports = {
  joiWaterRateSchema,
};
