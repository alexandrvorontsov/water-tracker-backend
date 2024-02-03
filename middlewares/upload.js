const multer = require("multer");
const path = require("path");
const { HttpError } = require("../helpers");

const tempDir = path.resolve("tmp");
const storage = multer.diskStorage({
  tempDir,
  filename: (req, file, cb) => {
    const filename = file.originalname;
    cb(null, filename);
  },
});

const limits = {
  fileSize: 2097152,
};
// limits 2Mb

const fileFilter = (req, file, cb) => {
  const allowedFormats = ["image/jpeg"];
  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(HttpError(400, "Adjust the allowed formats as needed image/jpeg"));
  }
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

module.exports = upload;
