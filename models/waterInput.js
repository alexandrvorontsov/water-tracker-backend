const { Schema, model } = require("mongoose");
const Joi = require("joi");

const waterInputSchema = new Schema(
  {
    waterVolume: {
      type: Number,
      min: 1,
      max: 5000,
      required: [true, "Enter the value of the water used"],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Enter the time of entering"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

waterInputSchema.post("save");
waterInputSchema.pre("findOneAndUpdate");
waterInputSchema.post("findOneAndUpdate");

const waterInput = model("waterInput", waterInputSchema);

module.exports = waterInput;
