const { WaterInput } = require("../../models");
const { HttpError } = require("../../helpers");

const delWaterValueUsed = async (req, res) => {
  const {
    user: { _id: owner },
    params: { id },
  } = req;

  // console.log({ _id });
  // console.log({ _id: portion });
  const delPortion = await WaterInput.findOneAndDelete({ _id: id, owner });
  if (!delPortion) {
    throw HttpError(404, `Portion ${id} is not found`);
  }

  res.status(200).json({ message: "Delete success" });
};

module.exports = delWaterValueUsed;
