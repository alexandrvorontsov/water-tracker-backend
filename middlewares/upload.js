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
  fileSize: 15 * 1024 * 1024,
};

const format = (req, file, cb) => {
  const fileFilter = file.originalname.split(".").pop().toUpperCase();
  if (fileFilter !== "jpg") {
    return cb(HttpError(400, "Adjust the allowed formats as needed jpg"));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits,
  format,
});

module.exports = upload;
