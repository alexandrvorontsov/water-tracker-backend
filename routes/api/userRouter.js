const express = require("express");
const {
  getCurrent,
  updateUserInfo,
  updateAvatarUser,
} = require("../../controllers/userController");

const userRouter = express.Router();

userRouter.get("/current", getCurrent);

userRouter.patch("/", updateUserInfo);

userRouter.patch("/avatars", updateAvatarUser);

module.exports = userRouter;
