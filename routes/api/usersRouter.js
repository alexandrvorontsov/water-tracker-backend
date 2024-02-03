const express = require("express");
const {
  authenticate,
  isEmptyBody,
  validateBody,
  ctrlWrapper,
  upload,
} = require("../../middlewares");

const { users: ctrl } = require("../../controllers");

const { joiUserSchema } = require("../../models/users");

const router = express.Router();

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(joiUserSchema),
  ctrlWrapper(ctrl.updateUserInfo)
);

router.patch(
  "/avatar",
  authenticate,
  upload.single("picture"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
