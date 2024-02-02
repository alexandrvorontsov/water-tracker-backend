const { WaterInput } = require("../../models");
const { HttpError } = require("../../helpers");

const delWaterVolumeUsed = async (req, res) => {
  const {
    user: { _id: owner },
    params: { id },
  } = req;

  const delPortion = await WaterInput.findOneAndDelete({ _id: id, owner });
  if (!delPortion) {
    throw HttpError(404, `Portion ${id} is not found`);
  }

  res.status(200).json({ message: "Delete success" });
};

module.exports = delWaterVolumeUsed;
