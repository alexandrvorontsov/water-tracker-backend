const { WaterInput } = require("../../models");
const { HttpError } = require("../../helpers");

const addWaterValueUsed = async (req, res, next) => {
  try {
    const {
      user: { _id: owner },
    } = req;

    // console.log({ _id });
    console.log({ _id: owner });

    const addPortion = await WaterInput.create({ ...req.body, owner });
    if (!addPortion) {
      throw HttpError(404, "Portion not found");
    }
    // console.log(addPortion);
    res.status(201).json({
      _id: addPortion._id,
      owner: addPortion.owner,
      waterValue: addPortion.waterValue,
      date: addPortion.date,
    });
  } catch (error) {
    next(error); // Передача помилки до middleware для обробки
  }
};

module.exports = addWaterValueUsed;
