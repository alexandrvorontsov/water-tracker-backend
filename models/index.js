const { User } = require("./users");
const { joiUserSchema } = require("./users");
const { joiWaterRateSchema } = require("./water");

const { joiWaterAddSchema } = require("./water");
const { WaterInput } = require("./water");

module.exports = {
  User,
  joiWaterRateSchema,
  joiWaterAddSchema,
  WaterInput,
  joiUserSchema,
};
