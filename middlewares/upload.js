const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: { fileSize: 2048 },
});

const upload = multer({
  storage: multerConfig,
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype.includes("image")) {
      cb(null, true);
    } else {
      const err = new Error();
      err.status = 400;
      err.message = "Wrong format";
      cb(err);
    }
  },
});

module.exports = upload;

// router
// router.post('/user', authenticate, upload.single('avatar'), ctrl.addAvatar);

// upload
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer');

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: async (req, file) => {
//     // Determine the folder based on file properties or request data
//     let folder;
//     if (file.fieldname === 'avatar') {
//       folder = 'avatars';
//     } else if (file.fieldname === 'documents') {
//       folder = 'documents';
//     } else {
//       folder = 'misc';
//     }
//     return {
//       folder: folder,
//       allowed_formats: ["jpg", "png"], // Adjust the allowed formats as needed
//       public_id: file.originalname, // Use original filename as the public ID
//       transformation: [
//         { width: 350, height: 350 },
//         { width: 700, height: 700 },
//       ],
//     };
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;

// //controller
// const someFunc = async (req, res) => {
//   const avatarURL = req.file.path;
// };