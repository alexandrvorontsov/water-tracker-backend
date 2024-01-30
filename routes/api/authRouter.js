const express = require("express");
const {
  authenticate,
  validateBody,
  ctrlWrapper,
} = require("../../middlewares");

const { auth: ctrl } = require("../../controllers");
const { joiSignupSchema, joiSigninSchema } = require("../../models/users");

const router = express.Router();

router.post("/signup", validateBody(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/signin", validateBody(joiSigninSchema), ctrlWrapper(ctrl.signin));
router.post("/signout", authenticate, ctrlWrapper(ctrl.signout));

module.exports = router;
