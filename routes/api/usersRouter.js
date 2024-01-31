const express = require("express");
const {
  authenticate,
  validateBody,
  ctrlWrapper,
  upload,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const { joiSignupSchema, joiSigninSchema } = require("../../models/users");

const router = express.Router();

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

// router.post("/signup", validateBody(joiSignupSchema), ctrlWrapper(ctrl.signup));

// router.post("/signin", validateBody(joiSigninSchema), ctrlWrapper(ctrl.signin));

// router.post("/signout", authenticate, ctrlWrapper(ctrl.signout));

router.patch("/:id", authenticate, ctrl.updateUserInfo);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
