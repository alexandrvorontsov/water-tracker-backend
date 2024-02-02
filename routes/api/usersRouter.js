const express = require("express");
const {
  authenticate,
  isEmptyBody,
  ctrlWrapper,
  upload,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

// const { joiSignupSchema, joiSigninSchema } = require("../../models/users");

const router = express.Router();

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch("/", authenticate, ctrlWrapper(ctrl.updateUserInfo));

router.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
