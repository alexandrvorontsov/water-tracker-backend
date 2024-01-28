const express = require("express");
const {
  getCurrent,
  updateUserInfo,
  updateAvatarUser,
} = require("../../controllers/userController");

const userRouter = express.Router();

userRouter.get("/current", getCurrent);

userRouter.patch("/", updateUserInfo);

userRouter.patch("/avatar", updateAvatarUser);

// router.post('/user', authenticate, upload.single('avatar'), ctrl.addAvatar);

module.exports = userRouter;
