const express = require("express");
const {
  auth,
  validateBody,
  ctrlWrapper,
  upload,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiSignupSchema, joiSigninSchema } = require("../../models/users");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post("/signup", validateBody(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/signin", validateBody(joiSigninSchema), ctrlWrapper(ctrl.signin));

router.post("/signout", auth, ctrlWrapper(ctrl.signout));

// router.patch("/:id", auth, ctrl.updateSubscription);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
