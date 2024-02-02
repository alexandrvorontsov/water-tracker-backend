const { WaterInput } = require("../../models");
const { HttpError } = require("../../helpers");

const addWaterVolumeUsed = async (req, res, next) => {
  try {
    const {
      user: { _id: owner },
    } = req;

    const addPortion = await WaterInput.create({ ...req.body, owner });
    if (!addPortion) {
      throw HttpError(404, "Portion not found");
    }

    res.status(201).json({
      _id: addPortion._id,
      owner: addPortion.owner,
      waterVolume: addPortion.waterVolume,
      date: addPortion.date,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addWaterVolumeUsed;
