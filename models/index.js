// users
const { Contact } = require("./contact");
const { User } = require("./users");
const { joiWaterRateSchema } = require("./water");

// waterinput
const { joiWaterAddSchema } = require("./water");
const { WaterInput } = require("./water");

module.exports = {
  Contact,
  User,
  joiWaterRateSchema,
  joiWaterAddSchema,
  WaterInput,
};
