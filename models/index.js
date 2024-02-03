// users
const { User } = require("./users");
const { joiUserSchema } = require("./users");
const { joiWaterRateSchema } = require("./water");

// waterinput
const { joiWaterAddSchema } = require("./water");
const { WaterInput } = require("./water");

module.exports = {
  User,
  joiWaterRateSchema,
  joiWaterAddSchema,
  WaterInput,
  joiUserSchema,
};
