// const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchemaWaterRate = Joi.object({
  waterRate: Joi.number().min(1).max(15000).required(),
});

module.exports = {
  userSchemaWaterRate,
};
