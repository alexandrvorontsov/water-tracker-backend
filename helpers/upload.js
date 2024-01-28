// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: async (req, file) => {
//     // Determine the folder based on file properties or request data
//     let folder;
//     if (file.fieldname === "avatar") {
//       folder = "avatars";
//     } else if (file.fieldname === "documents") {
//       folder = "documents";
//     } else {
//       folder = "misc";
//     }
//     return {
//       folder: folder,
//       allowed_formats: ["jpg", "png"], // Adjust the allowed formats as needed
//       public_id: req.userId, // Use original filename as the public ID  file.originalname
//       transformation: [
//         { width: 350, height: 350 },
//         { width: 700, height: 700 },
//       ],
//     };
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;
