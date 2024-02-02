const cloudinary = require("cloudinary").v2;
const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const fs = require("fs/promises");

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  if (!req.file) {
    throw HttpError(400, "File not found");
  }
  const { path } = req.file;

  const { secure_url: avatarURL } = await cloudinary.uploader.upload(path, {
    folder: "water-tracker/avatars",
    public_id: `${_id}_avatar`,
    overwrite: true,
    transformation: { width: 350, height: 350, gravity: "faces", crop: "fill" },
  });

  await fs.unlink(path);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
