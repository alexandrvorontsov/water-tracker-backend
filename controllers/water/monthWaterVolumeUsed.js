const { WaterInput } = require("../../models");
const { HttpError } = require("../../helpers");

const updateWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner },
    params: { id },
  } = req;

  const updatePortion = await WaterInput.findOneAndUpdate(
    { _id: id, owner },
    req.body,
    { new: true, projection: { createdAt: 0, updatedAt: 0 } }
  );

  if (!updatePortion) {
    throw HttpError(404, `Portion ${id} is not found`);
  }

  res.status(201).json({ updatePortion });
};

module.exports = updateWaterVolumeUsed;
